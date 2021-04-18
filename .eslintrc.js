const path = require('path')

module.exports = {
  extends: [
    path.join(__dirname, 'recommended'),
    path.join(__dirname, 'recommended-jsx')
  ],
  overrides: [
    {
      files: ['./*.js', './tests/babel-register.js', './tests/.eslintrc.js'],
      rules: {
        'import/no-commonjs': 'off'
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        path.join(__dirname, 'recommended-typescript')
      ]
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.json')
  }
}
