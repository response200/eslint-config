const jsxA11y = require('eslint-plugin-jsx-a11y')
const neostandard = require('neostandard')

// Run neostandard's config builder function and then grab just the JSX configs
// from the returned config array.
const configNames = ['neostandard/jsx', 'neostandard/style/jsx']
const neostandardJsxConfigs = neostandard().reduce((acc, config) => {
  if (configNames.includes(config.name)) {
    acc.push({
      ...config,
      // JSX configs should apply for all files, including .js and .ts files.
      ignores: []
    })
  }

  return acc
}, [])

module.exports = [
  {
    files: ['**/*.jsx']
  },
  jsxA11y.flatConfigs.strict,
  ...neostandardJsxConfigs,
  {
    rules: {
      //
      // @stylistic/eslint-plugin rules.
      //
      '@stylistic/jsx-quotes': ['error', 'prefer-double']
    }
  }
]
