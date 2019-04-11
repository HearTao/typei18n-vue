const path = require('path')
const nodeExternals = require('webpack-node-externals');
module.exports = {
  mode: 'development',
  target: 'web',
  context: __dirname,
  entry: './src/index.tsx',
  output: {
    filename: 'index.js',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'lib')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  devtool: "source-map",
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        exclude: [/node_modules/]
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: [/node_modules/]
      }
    ]
  },
  externals: [nodeExternals()]
}
