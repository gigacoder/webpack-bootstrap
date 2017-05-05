var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.join(__dirname,'./public'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015'] 
                }
            },
            {
                test: /\.css$/,
                loader: "css-loader"
            },
            {
                test: /\.css$/,
                loader: "css-loader!autoprefixer-loader"
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("css-loader!sass-loader")
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: "file-loader?name=img/img-[hash:6].[ext]"
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: "url-loader?limit=5000&name=img/img-[hash:6].[ext]"
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    },
    plugins : [
        new ExtractTextPlugin('./css/bootstrap.css')
    ]
};

