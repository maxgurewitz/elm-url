var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var del = require('del');
var rename = require('gulp-rename');
var shell = require('gulp-shell');

var nativeSrc = __dirname + '/native-src/';
var nativeDst = __dirname + '/src/Native/';
var src = '/src/';
var bundleName = 'Url.js';

gulp.task('clean-native', function (cb) {
  del(nativeDst + '*', cb);
});

gulp.task('native-src', ['clean-native'], function () {
  var bundle = browserify(nativeSrc).bundle();
  bundle
    .pipe(source(nativeSrc))
    .pipe(rename(bundleName))
    .pipe(gulp.dest(nativeDst));
});

gulp.task('elm-make', shell.task(['elm-make']));


gulp.task('watch', function () {
  gulp.watch(__dirname + src, ['elm-make']);
  gulp.watch(__dirname + nativeSrc, ['native-src']);
});

gulp.task('default', ['native-src', 'elm-make', 'watch']);
