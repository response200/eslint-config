const neostandard = require('neostandard')
const { plugins: neostandardPlugins } = require('neostandard')

// Eslint-plugin-import-x/typescript ruleset need to be added to the config
// without `plugins` keys. Otherwise ESLint outputs an error `ConfigError: Config "UserConfig[0][1] > import-x/typescript": Key "plugins": Cannot redefine plugin "import-x"`.
const { plugins: _importTypeScriptPlugins, ...importTypeScriptConfigs } = neostandardPlugins['import-x'].flatConfigs.typescript

// Run neostandard's config builder function and then grab just the TypeScript
// configs from the returned config array.
const configNames = ['neostandard/ts']
const neostandardTypeScriptConfigs = neostandard({
  noJsx: true,
  ts: true
}).reduce((acc, config) => {
  if (configNames.includes(config.name)) {
    acc.push({
      ...config,
      // TypeScript configs should apply for .tsx files, too.
      files: [...config.files, '**/*.tsx']
    })
  }

  return acc
}, [])

module.exports = [
  importTypeScriptConfigs,
  ...neostandardPlugins['typescript-eslint'].configs.recommendedTypeChecked,
  ...neostandardPlugins['typescript-eslint'].configs.stylisticTypeChecked,
  ...neostandardTypeScriptConfigs,
  {
    rules: {
      //
      // Eslint built-in rules.
      //
      'constructor-super': 'error',
      'no-class-assign': 'error',
      'no-const-assign': 'error',
      'no-dupe-args': 'error',
      'no-dupe-keys': 'error',
      'no-func-assign': 'error',
      'no-import-assign': 'error',
      'no-new-native-nonconstructor': 'error',
      'no-obj-calls': 'error',
      'no-this-before-super': 'error',
      'no-unreachable': 'error',
      'no-unsafe-negation': 'error',
      'no-with': 'error',

      //
      // @stylistic/eslint-plugin rules.
      //
      '@stylistic/member-delimiter-style': ['error', {
        multiline: {
          delimiter: 'none'
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false
        }
      }],
      '@stylistic/type-annotation-spacing': 'error',

      //
      // @typescript-eslint/eslint-plugin rules.
      //
      '@typescript-eslint/array-type': ['error', { default: 'array', readonly: 'array' }],
      '@typescript-eslint/ban-ts-comment': ['error', { minimumDescriptionLength: 3 }],
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/method-signature-style': 'error',
      // @typescript-eslint/naming-convention rule supersedes camelcase.
      camelcase: 'off',
      '@typescript-eslint/naming-convention': ['error',
        {
          selector: 'default',
          format: ['strictCamelCase', 'StrictPascalCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'forbid'
        },
        // If property name requires quotes, allow it to be any kind. This is
        // needed to allow HTTP headers such as `'Content-Type': 'application/json'`.
        {
          selector: 'property',
          format: null,
          modifiers: ['requiresQuotes']
        },
        {
          selector: ['enumMember', 'typeLike'],
          format: ['StrictPascalCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'forbid'
        }
      ],
      '@typescript-eslint/no-empty-object-type': ['error', {
        allowInterfaces: 'with-single-extends'
      }],
      '@typescript-eslint/no-extraneous-class': ['error', {
        allowWithDecorator: true
      }],
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-meaningless-void-operator': ['error', {
        checkNever: true
      }],
      '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
      // Disable @typescript-eslint/no-confusing-non-null-assertion and @typescript-eslint/non-nullable-type-assertion-style.
      // Enable @typescript-eslint/no-non-null-assertion.
      '@typescript-eslint/no-confusing-non-null-assertion': 'off',
      '@typescript-eslint/non-nullable-type-assertion-style': 'off',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-redundant-type-constituents': 'error',
      '@typescript-eslint/no-unnecessary-qualifier': 'error',
      '@typescript-eslint/no-useless-empty-export': 'error',
      '@typescript-eslint/prefer-enum-initializers': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': ['error', {
        ignoreConditionalTests: false
      }],
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/require-array-sort-compare': 'error',
      '@typescript-eslint/return-await': ['error', 'always'],
      '@typescript-eslint/strict-boolean-expressions': ['error', {
        allowAny: false,
        allowNullableBoolean: false,
        allowNullableEnum: false,
        allowNullableNumber: false,
        allowNullableObject: false,
        allowNullableString: false,
        allowNumber: false,
        allowString: false
      }],
      '@typescript-eslint/triple-slash-reference': ['error', {
        lib: 'never',
        path: 'never',
        types: 'never'
      }],
      '@typescript-eslint/unified-signatures': 'error',

      //
      // Rules that will likely be enabled or made stricter in the future.
      //
      'no-var': 'warn',
      'no-void': ['error', {
        allowAsStatement: true
      }],
      '@typescript-eslint/no-array-delete': 'off',
      '@typescript-eslint/no-deprecated': 'off',
      '@typescript-eslint/no-misused-spread': 'off',
      '@typescript-eslint/no-mixed-enums': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-unsafe-unary-minus': 'off',
      '@typescript-eslint/no-use-before-define': ['error', {
        classes: false,
        enums: false,
        functions: false,
        typedefs: false,
        variables: false
      }],
      '@typescript-eslint/prefer-find': 'off',
      '@typescript-eslint/prefer-for-of': 'off',
      '@typescript-eslint/prefer-namespace-keyword': 'off',
      '@typescript-eslint/prefer-regexp-exec': 'off',
      '@typescript-eslint/prefer-string-starts-ends-with': 'off',

      //
      // Rules whose explicit enablement can likely be removed in the future.
      //
      '@typescript-eslint/no-confusing-void-expression': 'error',
      '@typescript-eslint/no-dynamic-delete': 'error',
      '@typescript-eslint/no-invalid-void-type': 'error',
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
      '@typescript-eslint/prefer-reduce-type-parameter': 'error',
      '@typescript-eslint/prefer-return-this-type': 'error'
    }
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      'no-var': 'off'
    }
  }
]
