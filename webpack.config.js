const path = require('path');

module.exports = {
    entry: './dev/ts/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public', 'js')
    },
    watch: true,
    mode: 'development',
    devtool: 'source-map',
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