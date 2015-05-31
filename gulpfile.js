var gulp = require('gulp');
var shell = require('gulp-shell');
var elm = require('gulp-elm');
var settings = require('./settings');

function logError (err) {
  gutil.log(err.message);
}

gulp.task('cleanJS', shell.task([
  'rm ' + __dirname + settings.dist.js + '*.js'
], { ignoreErrors: true }));

gulp.task('build', ['installElm', 'install', 'elm-init']);

gulp.task('install', shell.task(['npm i']));

gulp.task('installElm', shell.task(['npm -g elm']));

gulp.task('elm-init', elm.init);

gulp.task('elm', ['cleanJS'], function () {
  gulp.src(__dirname + settings.src.elm)
    .pipe(elm().on('error', logError))
    .pipe(gulp.dest(__dirname + settings.dist.js))
});

gulp.task('watch', function () {
  gulp.watch(__dirname + settings.src.elm, ['elm']);
});

gulp.task('default', ['elm', 'watch']);
