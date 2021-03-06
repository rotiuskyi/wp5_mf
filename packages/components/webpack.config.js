const webpack = require('webpack');
const dependencies = require('./package.json').dependencies;
const federationConf = require('./federation.config.json');

module.exports = {
    mode: 'development',

    entry: Object.values(federationConf.exposes),

    devtool: 'source-map',

    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json']
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
            ...federationConf,
            shared: {
                react: dependencies.react,
            }
        }),
    ]
};
