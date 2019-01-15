var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
 gulp.src('src/scss/main.scss')
 .pipe(sass().on('error', sass.logError))
 .pipe(gulp.dest('src/css'));
});

gulp.task('watch', function(){
  gulp.watch('src/scss/*.scss', gulp.series('sass')); 
});