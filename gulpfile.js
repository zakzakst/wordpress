/**
 * npm modules
 */
const gulp = require('gulp');

/**
 * task modules
 */
const { BROWSER_START, BROWSER_RELOAD } = require('./tasks/browser-sync');
const NUNJUCKS_BUILD = require('./tasks/nunjucks-build');
const { SASS_BUILD, SASS_LINT } = require('./tasks/sass-build');
const WEBPACK = require('./tasks/webpack');
const IMAGE_MIN = require('./tasks/image-min');

/**
 * gulp tasks
 */
gulp.task('watchFiles', (done) => {
  gulp.watch(
    './src/nunjucks/**/*.njk',
    gulp.series(NUNJUCKS_BUILD, BROWSER_RELOAD)
  );
  gulp.watch('./src/sass/**/*.scss', gulp.series(SASS_BUILD, BROWSER_RELOAD));
  gulp.watch('./src/js/**/*.js', gulp.series(WEBPACK, BROWSER_RELOAD));
  done();
});
gulp.task('default', gulp.series(BROWSER_START, 'watchFiles'));
gulp.task('build', gulp.series(NUNJUCKS_BUILD, SASS_BUILD, WEBPACK));
gulp.task('sassLint', gulp.series(SASS_LINT));
gulp.task('imageMin', gulp.series(IMAGE_MIN));
gulp.task('nunjucksBuild', gulp.series(NUNJUCKS_BUILD));
gulp.task('sassBuild', gulp.series(SASS_BUILD));
gulp.task('webpack', gulp.series(WEBPACK));
