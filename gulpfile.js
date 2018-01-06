var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function(){
    return gulp.src('./sass/index.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});