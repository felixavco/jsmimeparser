const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'mailParser.min.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'var',
    library: 'MyLibrary',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
