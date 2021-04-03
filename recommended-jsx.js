module.exports = {
  extends: [
    'plugin:jsx-a11y/strict',
    'standard-jsx'
  ],
  plugins: [
    'jsx-a11y'
  ],
  rules: {
    //
    // Eslint built-in rules.
    //
    'jsx-quotes': ['error', 'prefer-double']
  }
}
