require('@babel/register')({
  extensions: ['.ts'],
  plugins: [
    '@babel/plugin-transform-modules-commonjs',
    './tests/babel-plugin-module-resolver'
  ],
  presets: [
    '@babel/preset-typescript'
  ]
})
