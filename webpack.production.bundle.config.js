const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseName = "gumga-gquery";

module.exports = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: baseName + '.js',
        publicPath: '/dist/'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: baseName + ".css",
            allChunks: true
        })
    ],
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/
            },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: [
                {
                  loader: 'babel-loader'
                }
              ]
            },
            {
              test: /\.css$/,
              use: ExtractTextPlugin.extract({
                  use: 'css-loader'
              })
            },
            {
              test: /\.(jpe?g|png|gif|svg|eot|woff2|woff|ttf)$/i,
              use: "file-loader?name=assets/[name].[ext]"
            }
        ]
    }
};
