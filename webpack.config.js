const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = {
  mode: 'development',
  context: __dirname,
  devtool: 'source-map',
  entry: './static/public/js/main.js',
  output: {
    path: __dirname + '/static/public/dist',
    filename: 'bundle.js',
  },
  optimization: {
    minimize: true,
    removeAvailableModules: true,
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
    new ImageminPlugin({
      test: /\.(png)$/,
      optipng: {
        optimizationLevel: 5,
      },
    }),
    new ImageminPlugin({
      test: /\.(jpeg|jpg)$/,
      plugins: [
        imageminMozjpeg({
          quality: 70,
          progressive: true,
        }),
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
        use: ['style-loader', 'css-loader', 'clean-css-loader'],
      },
      {
        test: /\.(ttf|otf|svg)$/,
        loader: 'url-loader?limit=80000&name=img/[name].[ext]',
      },
    ],
  },
};
