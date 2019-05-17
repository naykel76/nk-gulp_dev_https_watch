const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

/* --------------------------------------------------------------------------
| LOCATION VARIABLES
| ------------------------------------------------------------------------ */
const HOST = 'nbw.site'
const BASE = 'https://' + HOST; // base url for https
const ROOT = '/nbw_dev_modules/nk-gulp_watcher/src/'; // site root

/* --------------------------------------------------------------------------
| Watch Files
| ------------------------------------------------------------------------ */
const htmlWatchFiles = '**/*.html';
const jsWatchFiles = '**/*.js';

/* --------------------------------------------------------------------------
| Watch Tasks
| ------------------------------------------------------------------------ */
gulp.task('watch', function () {

  console.log(htmlWatchFiles);

  browserSync.init({
    open: 'external',
    proxy: BASE + ROOT, // should reflect the local url
    host: HOST,
    https: {
      key: "C:/Users/nayke/Dropbox/Web Development/htdocs/KeyData/nbw.site.key",
      cert: "C:/Users/nayke/Dropbox/Web Development/htdocs/KeyData/nbw.site.crt"
    }
  });

  gulp.watch([htmlWatchFiles, jsWatchFiles]).on('change', browserSync.reload)
});
