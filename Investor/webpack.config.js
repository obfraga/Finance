const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    },
    devtool: false,
    name: 'general',
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                loader: 'url-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    entry: {
        app: './src/scripts/js/auto-generated/app.js',
    },
    output: {
        path: path.resolve(__dirname + "/wwwroot/", 'js'),
        filename: '[name].bundle.js',
    },
    resolve: {
        alias: {
            scss: path.resolve(__dirname, './src/styles/scss/'),
        }
    },
    plugins: ([
        new MiniCssExtractPlugin({
            filename: '../css/[name].bundle.css'
        }),
    ]),
};