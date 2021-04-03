module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:promise/recommended',
    'standard'
  ],
  plugins: [
    'promise'
  ],
  reportUnusedDisableDirectives: true,
  rules: {
    //
    // Eslint built-in rules.
    //
    'arrow-parens': ['error', 'always'],
    'no-console': 'error',
    'operator-linebreak': ['error', 'before'],
    'require-await': 'error',

    //
    // Import plugin rules.
    //
    // Import/extensions does not yet support `ignore` behaviour for all other
    // extensions when `never` behaviour is defined for some extensions. So keep
    // the rule unenabled for now.
    // 'import/extensions': ['error', 'ignore', {
    //   js: 'never',
    //   jsx: 'never',
    //   ts: 'never',
    //   tsx: 'never'
    // }],
    'import/newline-after-import': 'error',
    'import/no-amd': 'error',
    'import/no-commonjs': 'error',
    'import/no-default-export': 'error',
    'import/no-deprecated': 'warn',
    'import/no-namespace': 'error',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'error',
    // Import/no-unresolved needs configuration on the user's part. So disable it.
    'import/no-unresolved': 'off',
    'import/no-useless-path-segments': 'error',
    'import/order': ['error', { alphabetize: { order: 'asc' } }],

    //
    // Promise plugin rules.
    //
    'promise/always-return': 'off',
    'promise/catch-or-return': 'off',
    'promise/no-nesting': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/valid-params': 'error'
  },
  overrides: [
    {
      files: ['.eslintrc.js'],
      rules: {
        'import/no-commonjs': 'off'
      }
    }
  ]
}
