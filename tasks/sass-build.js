/**
 * npm modules
 */
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const packageImporter = require('node-sass-package-importer');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const stylelint = require('stylelint');

/**
 * values
 */
const files = './src/sass/style.scss';
const dist = './dist/css';
const environment = process.env.NODE_ENV || 'development';
const outputStyle = environment === 'production' ? 'compressed' : 'expanded';
const lintFiles = [
  './src/sass/**/*.{css,scss}',
  '!./src/sass/**/_*.{css,scss}',
];

/**
 * functions
 */
function SASS_BUILD() {
  return gulp
    .src(files)
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(
      sass({
        importer: packageImporter({
          extensions: ['.scss', '.css'],
        }),
        outputStyle: outputStyle,
      })
    )
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest(dist));
}

function SASS_LINT() {
  return gulp
    .src(lintFiles)
    .pipe(plumber())
    .pipe(
      sass({
        importer: packageImporter({
          extensions: ['.scss', '.css'],
        }),
      })
    )
    .pipe(postcss([stylelint()]));
}

module.exports = { SASS_BUILD, SASS_LINT };
