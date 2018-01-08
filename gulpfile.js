var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var ghPages = require('gulp-gh-pages');

gulp.task('sass', function(){
    return gulp.src('./sass/index.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'));
});
/*
gulp.task('deploy', function() {
    return gulp.src('')
    .pipe(ghPages());
});*/

gulp.task('default', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});