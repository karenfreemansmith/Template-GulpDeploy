var gulp = require('gulp');
var mimimize = require('gulp-uglify');
var concat = require('gulp-concat');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var util = require('gulp-util');
var del = require('del');
var jshint = require('gulp-jshint');

var productionBuild = util.env.production;

gulp.task('jshint', function() {
  return gulp.src(['src/js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('clean', function() {
  return del(['build', 'tmp']);
});

gulp.task('build', ['clean'], function() {
  if(productionBuild) {
    gulp.start('jsMin');
  } else {
    gulp.start('jsBrowserify');
  }
});

gulp.task('jsConcat', function() {
  return gulp.src(['./src/js/form.js' ,'./src/js/ui.js'])
   .pipe(concat('allConcat.js'))
   .pipe(gulp.dest('./tmp'));
});

gulp.task('jsBrowserify', ['jsConcat'], function() {
  return browserify({ entries: ['./tmp/allConcat.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('jsMin', ['jsBrowserify'], function() {
  return gulp.src('./dist/js/app.js')
    .pipe(mimimize())
    .pipe(gulp.dest('./dist/js'));
});
