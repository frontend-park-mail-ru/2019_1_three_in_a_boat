const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  context: __dirname,
  devtool: 'source-map',
  entry: './static/public/js/main.js',
  output: {
    path: __dirname + '/static/public/dist',
    filename: 'bundle.js',
  },
  plugins: [
    new ServiceWorkerWebpackPlugin({
      entry: __dirname + '/static/public/js/sw.js',
    }),
    new HtmlWebpackPlugin({
      template: './static/public/index.html',
    }),
    new CopyPlugin([{
      from: './static/public/manifest.webmanifest',
      to: '.',
    }]),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.ico$/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.(img|jpeg|jpg|png)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(ttf|otf|svg)$/,
        loader: 'url-loader?limit=80000&name=img/[name].[ext]',
      },
      {
        test: /(manifest|webmanifest|browserconfig\.xml)$/,
        use: [
          {
            loader: 'file-loader',
          },
          {
            loader: 'app-manifest-loader',
          },
        ],
      },
    ],
  },
};
