const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { SkeletonPlugin } = require("./skeletonPlugin");

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 9100,
    hot: true,
    open: true
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './public/index.html',
      inject: 'head'
    }),
    new SkeletonPlugin({
      staticDir: path.join(__dirname, 'dist'),
      device: 'iPhone X',
      domain: 'http://localhost:9100/'
    })
  ]
}