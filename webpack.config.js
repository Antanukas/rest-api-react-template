const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

// Not using -p option for production builds because uglify gets added twice
const isProduction = process.env.NODE_ENV === 'production';
const plugins = [
  new ExtractTextPlugin('styles.bundle.css', {
    allChunks: true,
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  }),
];

const path = require('path');
const jsPath  = 'appui';
const srcPath = path.join(__dirname, 'appui');

if (isProduction) {
  plugins.push(new webpack.optimize.OccurenceOrderPlugin());
  plugins.push(new webpack.optimize.DedupePlugin());
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    comments: false,
    sourceMap: false,
    mangle: true,
    minimize: true,
  }));
}

module.exports = {
  entry: ['babel-polyfill', path.join(srcPath, 'index.js')],
  output: {
    path: path.resolve(__dirname, 'app/assets/jsentrypoint'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!sass'),
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file',
    }, {
      test: /\.(woff|woff2)$/,
      loader: 'url?prefix=font/&limit=5000',
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream',
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml',
    }, {
      test: /\.jsx?/,
      exclude: /node_modules/,
      loader: 'babel',
    }],
  },
  plugins,
  resolve: {
    root: srcPath,
    extensions: ['', '.js'],
    modulesDirectories: [
      'node_modules', '.', srcPath,
    ],
    alias: {},
  },
};
