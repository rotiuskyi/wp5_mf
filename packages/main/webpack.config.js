const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dependencies = require('./package.json').dependencies;

module.exports = {
    mode: 'development',

    entry: './src/index.ts',

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', 'json']
    },

    module: {
        rules: [
            {
                test: /\.(j|t)sx?/,
                loader: 'ts-loader'
            }
        ]
    },

    devServer: {
        port: 3000
    },

    plugins: [
        new webpack.container.ModuleFederationPlugin({
            remotes: {
                'wb5_mf_components': 'wb5_mf_components@http://localhost:3001/wb5_mf_components.js',
            },
            shared: {
                react: dependencies.react,
            }
        }),
        new HtmlPlugin({
            template: './public/index.html'
        })
    ]
};
