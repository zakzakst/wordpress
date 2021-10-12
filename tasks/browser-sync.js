/**
 * npm modules
 */
const browsersync = require('browser-sync').create();

/**
 * values
 */
const options = {
  server: {
    baseDir: './dist',
  },
};

/**
 * functions
 */
function BROWSER_START(done) {
  browsersync.init(options);
  done();
}

function BROWSER_RELOAD(done) {
  browsersync.reload();
  done();
}

module.exports = { BROWSER_START, BROWSER_RELOAD };
