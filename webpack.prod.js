const path = require('path')
const webpack = require('webpack')
const WorkboxPlugin = require('workbox-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    module: {
      rules: [
        {
          test: '/\.js$/',
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
            test: /\.scss$/,
            use: [ 'style-loader', 'css-loader', 'sass-loader' ]
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
          template: "./src/client/views/index.html",
          filename: "./index.html",
      }),
      new CleanWebpackPlugin({
          dry: true,
          verbose: true,
          cleanStaleWebpackAssets: true,
          protectWebpackAssets: false
      }),
      new WorkboxPlugin.GenerateSW(),
    ]
}
