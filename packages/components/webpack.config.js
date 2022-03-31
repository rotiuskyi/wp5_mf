const webpack = require('webpack');
const dependencies = require('./package.json').dependencies;

module.exports = {
    mode: 'development',

    entry: [
        './src/Counter.tsx',
    ],

    devtool: 'source-map',

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
        port: 3001
    },

    plugins: [
        new webpack.container.ModuleFederationPlugin({
            name: 'wb5_mf_components',
            exposes: {
                './Counter': './src/Counter.tsx',
            },
            shared: {
                react: dependencies.react,
            }
        }),
    ]
};
