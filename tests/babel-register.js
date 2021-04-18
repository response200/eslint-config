require('@babel/register')({
  extensions: ['.ts'],
  plugins: [
    '@babel/plugin-transform-modules-commonjs',
    ['babel-plugin-module-resolver', {
      alias: {
        tests: './tests'
      }
    }]
  ],
  presets: [
    '@babel/preset-typescript'
  ]
})
