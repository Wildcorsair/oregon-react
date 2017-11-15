const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './resources/js/',
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, './public/js/')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ]
};
