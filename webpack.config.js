const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'mailParser.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'production',
    optimization: {
        minimize: false,
        minimizer: [new TerserPlugin()],
    },
};
