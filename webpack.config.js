const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

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
    new WebpackPwaManifest({
      filename: 'manifest.json',
      name: 'HEXAGON',
      lang: 'ru',
      short_name: 'HEXAGON',
      start_url: '.',
      display: 'standalone',
      background_color: '#424242',
      theme_color: '#fb6a06',
      description: '\"Game Hexagon\" - ' +
          'semester project by team \"Three in the boat\"',
      icons: [
        {
          src: 'static/public/icons/touch/android-icon-192x192.png',
          sizes: [96, 128, 192, 256, 384, 512],
        },
        {
          src: 'static/public/icons/touch/ms-icon-310x310.png',
          size: '1024x1024',
        },
      ],
    }),
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
    ],
  },
};
