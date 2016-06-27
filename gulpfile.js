var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('hello', function() {
  console.log("hello");
});

gulp.task('jsBrowserify', function() {
  return browserify({ entries: ['ui.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist/js'));
});
