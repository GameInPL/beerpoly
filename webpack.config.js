'use strict';

const Path = require('path');
const Webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const dest = Path.join(__dirname, 'dist');

var config = {
  entry: {
    polyfills: Path.resolve(__dirname, 'src/scripts/entrypoints/polyfills'),
    app: Path.resolve(__dirname, 'src/scripts/entrypoints/app')
  },
  output: {
    path: dest,
    filename: '[name].js'
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new CleanWebpackPlugin([dest], {
      root: __dirname
    }),
    new CopyWebpackPlugin([{
      from: Path.resolve(__dirname, 'static'),
      to: '.',
      ignore:  ['.keep']
    }]),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ],
  module: {
    rules: [{
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    }, {
      test: /\.(js)$/,
      exclude: /(node_modules|bower_components)/,
      use: 'babel-loader'
    }, {
      test: /\.s?css/i,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
      ]
    }]
  }
};

module.exports = (env, argv) => {
  // Disable image compress during development
  if(argv.mode === 'production') {
    config.plugins.push(new ImageminPlugin({
      disable: argv.mode !== 'production',
      pngquant: {
        quality: '95-100'
      }
    }));
  }
  return config;
};
