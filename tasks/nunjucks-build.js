/**
 * npm modules
 */
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const nunjucksRender = require('gulp-nunjucks-render');
const htmlhint = require('gulp-htmlhint');
const htmlbeautify = require('gulp-html-beautify');
const minifyInline = require('gulp-minify-inline');
const minifyInlineJSON = require('gulp-minify-inline-json');
const gulpIf = require('gulp-if');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');

/**
 * values
 */
const files = ['src/nunjucks/pages/**/*.njk', '!src/nunjucks/pages/**/_*.njk'];
const dist = './dist';
const root = 'src/nunjucks/';
const environment = process.env.NODE_ENV || 'development';
const htmlminOptions = {
  collapseWhitespace: true,
  removeComments: true,
};
const CONSTANTS = require('../src/nunjucks/constants.js');

/**
 * functions
 */
function NUNJUCKS_BUILD() {
  return gulp
    .src(files)
    .pipe(plumber())
    .pipe(
      nunjucksRender({
        path: [root],
        data: CONSTANTS,
      })
    )
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter())
    .pipe(htmlbeautify())
    .pipe(minifyInline())
    .pipe(minifyInlineJSON())
    .pipe(gulpIf(environment === 'production', htmlmin(htmlminOptions)))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest(dist));
}

module.exports = NUNJUCKS_BUILD;
