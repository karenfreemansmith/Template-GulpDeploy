var gulp = require('gulp');
var minimize = require('gulp-uglify');
var concat = require('gulp-concat');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var util = require('gulp-util');
var del = require('del');
var jshint = require('gulp-jshint');
var lib = require('bower-files')({
  "overrides":{
    "bootstrap" : {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});

var productionBuild = util.env.production;

gulp.task('bower', ['bowerJS', 'bowerCSS']);

gulp.task('bowerJS', function() {
  return gulp.src(lib.ext('js').files)
    .pipe(concat('vendor.min.js'))
    .pipe(minimize())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('bowerCSS', function() {
  return gulp.src(lib.ext('css').files)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('jshint', function() {
  return gulp.src(['src/js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('clean', function() {
  return del(['dist', 'tmp']);
});

gulp.task('build', ['clean'], function() {
  if(productionBuild) {
    gulp.start('jsMin');
  } else {
    gulp.start('jsBrowserify');
  }
  gulp.start('bower');
});

gulp.task('jsConcat', function() {
  return gulp.src(['./src/js/form.js' ,'./src/js/ui.js', './src/js/time.js'])
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
    .pipe(minimize())
    .pipe(gulp.dest('./dist/js'));
});
