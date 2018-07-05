const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry:  path.resolve(__dirname, 'src/app.js'),
    output: {
        path: path.resolve(__dirname, 'www'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options:{
                    self: true,
                    pretty: true
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader'
            },
            {
                test: /\.s(a|c)ss$/,
                include: path.resolve(__dirname, 'src/sass'),
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader"
                }]
            }
        ]
    },
    resolve: {
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pug/pages/index.pug',
            inject: true
        })
    ]
};
