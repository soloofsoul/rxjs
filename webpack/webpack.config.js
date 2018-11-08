const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, '../node_modules/'),
        options: {
          presets: [ '@babel/env' ]
        }
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '../node_modules/'),
      './src/'
    ],
    extensions: ['*', '.js']
  },
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'App',
      template: './src/index.html',
      filename: 'index.html',
      inject: false,
      chunks: ['app']
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};