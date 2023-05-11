const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Jate Text Editor'
      }),
      new WebpackPwaManifest({
        inject: true,
        name: 'Text Editor',
        short_name: 'J.A.T.E Text Editor',
        description: '',
        background_color: '',
        theme_color: '',
        start_url: '/',
        publicPath: '/',
      })
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
