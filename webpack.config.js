const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    script: './src/js/script.js',
    top: './src/js/page-top.js',
  },
  output: {
    path: `${__dirname}/dist/js`,
    filename: '[name].js'
  },
  mode: 'production', // production development
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ]
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          test: /\.js$/,
          compress: {drop_console: true},
        },
      }),
    ],
  },
};
