const gulp = require('gulp');
const browsersync = require('browser-sync').create();

// サーバーの立ち上げ
function server(done) {
  // TODO: returnの形に変更
  browsersync.init({
    server: {
      baseDir: './dist'
    }
  });
  done();
}

// サーバーのリロード
function reload(done) {
  browsersync.reload();
  done();
}

exports.browsersync = {server, reload};
