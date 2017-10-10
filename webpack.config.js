const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DIST_DIR = path.join(__dirname, "built");
const CLIENT_DIR = path.join(__dirname, "src");

module.exports = {
    context: CLIENT_DIR,

    entry: {
        app   : './index.jsx',
    },

    output: {
        path    : DIST_DIR,
        filename: '[name].js',
        publicPath: '/'
    },

    devtool: 'eval',

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    watch: false,

    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            PRODUCTION: false,
            VERSION   : JSON.stringify('1.0.0'),
            PUBLIC_PATH: DIST_DIR
        }),
        new HtmlWebpackPlugin({
                title   : 'Netflix Roulette Built',
                hash    : true,
                template: './index.html'
            }
        ),
        new ExtractTextPlugin({
            filename : 'styles.css',
            allChunks: true
        })
    ],

    module: {
        rules: [{
            test: /\.less$/,
            use : ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use     : ['css-loader', 'less-loader']
            })
        }, {
            test   : /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use    : {
                loader : 'babel-loader',
                options: {
                    plugins: ['transform-react-jsx'],
                    presets: ['env', 'es2015', 'react']
                }
            }
        }]
    },

    devServer: {
        historyApiFallback: true,
        contentBase: './built',
        hot: true
    },
};