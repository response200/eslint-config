module.exports = {
  extends: [
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'love'
  ],
  plugins: [
    'promise',
    '@typescript-eslint'
  ],
  rules: {
    //
    // TypeScript plugin rules.
    //
    '@typescript-eslint/array-type': ['error', { default: 'array', readonly: 'array' }],
    // @typescript-eslint/comma-dangle rule supersedes comma-dangle.
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', {
      enums: 'never',
      generics: 'never',
      tuples: 'never'
    }],
    '@typescript-eslint/consistent-type-assertions': ['error', {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'allow'
    }],
    '@typescript-eslint/consistent-type-imports': ['error', {
      prefer: 'type-imports',
      disallowTypeAnnotations: true
    }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
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
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-meaningless-void-operator': ['error', {
      checkNever: true
    }],
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
    // Disable @typescript-eslint/non-nullable-type-assertion-style because it
    // conflicts with @typescript-eslint/no-non-null-assertion.
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',
    '@typescript-eslint/no-useless-empty-export': 'error',
    // @typescript-eslint/object-curly-spacing rule supersedes object-curly-spacing.
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/unified-signatures': 'error',

    //
    // Rules defined in recommended.js that for some reason need to be repeated
    // here for them to be applied to .ts and .tsx files.
    //
    'operator-linebreak': ['error', 'before']
  },
  overrides: [
    {
      files: '*.d.ts',
      rules: {
        'no-var': 'off'
      }
    }
  ]
}
