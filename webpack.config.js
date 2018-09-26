const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './app/js/app.js',
    output: {
        filename: 'app.min.js',
        path: path.resolve(__dirname, 'dist/js')
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/, exclude: /node_modules/,
                use: 'babel-loader'
            }
        ],
    },
    plugins: [
        new UglifyJsPlugin({
            test: /\.js(\?.*)?$/i
        })
    ]
};