const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// eslint-disable-next-line no-undef
module.exports = {
    entry: './src/index.js',
    output: {
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: "./build"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.(sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./public/index.html')
        })
    ]
};
