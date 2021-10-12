/**
 * npm modules
 */
const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');

/**
 * values
 */
const dist = './dist/js';
const config = require('../webpack.config');

/**
 * functions
 */
function WEBPACK() {
  return webpackStream(config, webpack).pipe(gulp.dest(dist));
}

module.exports = WEBPACK;
