const path = require('path');
const webpack = require("webpack");

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  }, 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // library: 'FlesAnalysis',
    libraryTarget: 'umd',
    // umdNamedDefine: true
  },
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      MODE: process.env.MODE ==='product' ? JSON.stringify('product') : JSON.stringify('dev'),
    })
  ]
};