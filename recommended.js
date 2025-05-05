const { configs } = require('@eslint/js')
const neostandard = require('neostandard')
const { plugins: neostandardPlugins } = require('neostandard')

// Eslint-plugin-import-x/errors and eslint-plugin-import-x/warnings rulesets
// need to be added to the config without `plugins` keys. Otherwise ESLint
// outputs an error `ConfigError: Config "UserConfig[0][1] > import-x/errors": Key "plugins": Cannot redefine plugin "import-x"`.
const { plugins: _importErrorsPlugins, ...importErrorsConfigs } = neostandardPlugins['import-x'].flatConfigs.errors
const { plugins: _importWarningsPlugins, ...importWarningsConfigs } = neostandardPlugins['import-x'].flatConfigs.warnings

module.exports = [
  configs.recommended,
  importErrorsConfigs,
  importWarningsConfigs,
  neostandardPlugins.promise.configs['flat/recommended'],
  ...neostandard({
    // Instruct neostandard to not include JSX-specific rules. JSX-specific
    // rules are enabled in recommended-jsx.js.
    noJsx: true
  }),
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error'
    },

    rules: {
      //
      // Eslint built-in rules.
      //
      'no-console': 'error',
      'require-await': 'error',

      //
      // @stylistic/eslint-plugin rules.
      //
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/operator-linebreak': ['error', 'before'],

      //
      // Eslint-plugin-import-x rules.
      //
      'import-x/newline-after-import': 'error',
      'import-x/no-amd': 'error',
      'import-x/no-commonjs': 'error',
      'import-x/no-default-export': 'error',
      'import-x/no-namespace': 'error',
      'import-x/no-self-import': 'error',
      'import-x/no-unassigned-import': 'error',
      // Import-x/no-unresolved needs configuration on the user's part. So disable it.
      'import-x/no-unresolved': 'off',
      'import-x/no-useless-path-segments': 'error',
      'import-x/order': ['error', { alphabetize: { order: 'asc' } }],

      //
      // Eslint-plugin-n rules.
      //
      'n/no-deprecated-api': 'error',

      //
      // Eslint-plugin-promise rules.
      //
      'promise/always-return': 'off',
      'promise/catch-or-return': 'off',
      'promise/no-multiple-resolved': 'error',
      'promise/no-nesting': 'error',
      'promise/no-return-in-finally': 'error',
      'promise/valid-params': 'error',

      //
      // Rules that will likely be enabled or made stricter in the future.
      //
      'no-constant-binary-expression': 'off',
      'no-empty-static-block': 'off',
      'no-irregular-whitespace': ['error', {
        skipComments: true,
        skipJSXText: true,
        skipRegExps: true,
        skipStrings: true,
        skipTemplates: true
      }],
      'no-unused-private-class-members': 'off',
      'import-x/no-deprecated': 'warn',
      'import-x/no-rename-default': 'off',

      //
      // Rules that will likely be disabled in the future.
      //
      'dot-notation': 'error',
      'no-inner-declarations': 'error'
    }
  },
  {
    files: [
      'eslint.config.js',
      'eslint.config.mjs'
    ],
    rules: {
      'import-x/no-default-export': 'off'
    }
  }
]
