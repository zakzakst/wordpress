const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
// TODO: 必要か判断
const prettify = require('gulp-prettify');
const htmlmin = require('gulp-htmlmin');

// 定数の読み込み
const CONSTANTS = require('../src/nunjucks/constants.js');

// Nunjucksのビルド
function nunjucksBuild() {
  const nunjucksPath = {
    root: 'src/nunjucks/',
    src: ['src/nunjucks/pages/**/*.njk', '!src/nunjucks/pages/**/_*.njk'],
    dist: 'dist/',
  };
  return gulp
    .src(nunjucksPath.src)
    .pipe(
      nunjucksRender({
        path: [nunjucksPath.root],
        data: CONSTANTS,
      })
    )
    .pipe(
      htmlmin({
        // collapseWhitespace : true,
        // removeComments : true,
      })
    )
    .pipe(
      prettify({
        indent_size: 2,
      })
    )
    .pipe(gulp.dest(nunjucksPath.dist));
}

exports.nunjucksBuild = nunjucksBuild;
