'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './resources/js/',
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, './public/js/')
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /\/node_modules\//,
      loader: "babel-loader",
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   output: {
    //     comments: false
    //   }
    // })
  ]
};
