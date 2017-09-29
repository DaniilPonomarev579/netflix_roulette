const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DIST_DIR = path.join(__dirname, "built");
const CLIENT_DIR = path.join(__dirname, "src");

module.exports = {
    context: CLIENT_DIR,

    entry: {
        // vendor: ['react', 'react-dom', 'express'],
        app   : './index.jsx',
        //+ styles: './styles/styles.less' // не надо,все стили импортятся прямо в компоненты
        //+ не использовать export default, надо без него и в импорте {}
        // на странице с фильмом сначала рендерится спиннер, потом по componentDidMount выполняется запрос через fetch
        //+ название компонента должно совпадать с именем файла
        // по кнопке на форме в функции preventDefault и программно делать через WithRouter
    },

    output: {
        path    : DIST_DIR,
        filename: '[name].js',
        // filename: 'bundle.js',
        publicPath: '/'
    },

    devtool: 'eval',

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    watch: true,

    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
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
        // new webpack.optimize.CommonsChunkPlugin({
        //     name     : ['vendor'],
        //     filename: '[name].js',
        //     // minChunks: 2,
        //     // chunks: ["pageA", "pageB"],
        //     // (Only use these entries)
        // }),
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