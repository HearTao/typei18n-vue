const config = {
  presets: [
    ['@babel/preset-env'],
    '@vue/babel-preset-jsx',
    '@babel/preset-typescript'
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-syntax-dynamic-import']
  ]
}

module.exports = Object.assign({}, config, {
  presets: [
    ['@babel/preset-env', { modules: false }],
    '@vue/babel-preset-jsx',
    '@babel/preset-typescript'
  ]
})

