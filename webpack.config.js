const path = require('path');

module.exports = {
  entry: './src/journal/journal.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'journal.js',
    path: path.resolve(__dirname, 'js')
  }
};