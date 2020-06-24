const path = require('path');

module.exports = {
    entry: {
        index: './dev/ts/index.ts',
        products: './dev/ts/products.ts'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public', 'js')
    },
    watch: true,
    mode: 'development',
    devtool: 'inline-source-map',
    module:{
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
}