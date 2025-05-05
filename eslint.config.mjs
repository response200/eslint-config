import { defineConfig, globalIgnores } from 'eslint/config'
import recommendedJsx from './recommended-jsx.js'
import recommendedTypeScript from './recommended-typescript.js'
import recommended from './recommended.js'

export default defineConfig([
  globalIgnores([
    'tests/sample-files'
  ]),
  {
    extends: [
      recommended,
      recommendedJsx
    ]
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [
      recommendedTypeScript
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  },
  {
    files: [
      'default.js',
      'index.js',
      'recommended.js',
      'recommended-jsx.js',
      'recommended-typescript.js',
      'tests/babel-plugin-module-resolver.js',
      'tests/babel-register.js'
    ],
    rules: {
      'import-x/no-commonjs': 'off'
    }
  }
])
