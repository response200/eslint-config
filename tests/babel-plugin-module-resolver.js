const path = require('path')

const modulePathsToResolve = /^tests\//

const importVisitors = {
  CallExpression: (nodePath, state) => {
    if (state.moduleResolverVisited.has(nodePath) || !state.types.isImport(nodePath.node.callee)) {
      return
    }

    state.moduleResolverVisited.add(nodePath)
    resolveModulePath(nodePath.get('arguments.0'), state)
  },

  'ImportDeclaration|ExportDeclaration': (nodePath, state) => {
    if (state.moduleResolverVisited.has(nodePath)) {
      return
    }

    state.moduleResolverVisited.add(nodePath)
    resolveModulePath(nodePath.get('source'), state)
  }
}

function resolveModulePath (nodePath, state) {
  if (!state.types.isStringLiteral(nodePath) || nodePath.node.pathResolved) {
    return
  }

  const sourcePath = nodePath.node.value

  if (!modulePathsToResolve.test(sourcePath)) {
    return
  }

  nodePath.replaceWith(state.types.stringLiteral(path.resolve(sourcePath)))
  nodePath.node.pathResolved = true
}

module.exports = ({ types }) => ({
  name: 'module-resolver',

  pre (file) {
    this.types = types
    this.moduleResolverVisited = new Set()
  },

  post () {
    this.moduleResolverVisited.clear()
  },

  visitor: {
    Program: {
      enter (programPath, state) {
        programPath.traverse(importVisitors, state)
      },

      exit (programPath, state) {
        programPath.traverse(importVisitors, state)
      }

    }
  }
})
