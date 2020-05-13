const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    app: './src/App.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },
  devtool: 'cheap-module-eavl-source-map',
  plugins: [new HtmlWebpackPlugin({
    template: './public/index.html'
  })],
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};