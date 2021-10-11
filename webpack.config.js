const TerserPlugin = require('terser-webpack-plugin');
const environment = process.env.NODE_ENV || 'development';

module.exports = {
  entry: {
    script: './src/js/script.js',
    top: './src/js/page-top.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    path: `${__dirname}/dist/js`,
    filename: '[name].js',
  },
  mode: environment,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules|dist)/,
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js$/,
        terserOptions: {
          compress: {
            // drop_console: environment === 'production' ? true : false,
            drop_console: true,
          },
        },
      }),
    ],
  },
};
