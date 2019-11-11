import path from 'path';

const webpackConfig = {
    entry: {
        main: "./source/js/index.js",
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: require.resolve('babel-loader'),
                    query: {
                        presets: [
                            ['@babel/preset-env', { modules: false }],
                        ],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js'],
        alias: {
            source: path.resolve(__dirname, 'source/'),
        },
    },
};

export default webpackConfig;
