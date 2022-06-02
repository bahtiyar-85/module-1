const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const isDev = process.env.NODE__ENV === 'development';
const isProd = !isDev;

const optimization = () => {
    if(isProd){
        const config = {
            minimizer : [
                new TerserWebpackPlugin(),
                new CssMinimizerPlugin()
            ]
        }  
        return config;
    }
}

module.exports = {
    mode: 'development',
    entry:'./src/app.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 5100,
        hot: isDev
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "styles.css",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./src/images",
                    to: "./images"
                },
                {
                    from: "./src/icons",
                    to:"./icons"
                },
                {
                    from: "./src/data/config.json",
                    to:"./config.json"
                },
            ]
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
        ]
    },
    optimization: optimization()
}