var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var ghPages = require('gulp-gh-pages');
var concat = require('gulp-concat');

gulp.task('sass', function(){
    return gulp.src('./dev/sass/index.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dev/css'));
});

gulp.task('script', function(){
    return gulp.src('./dev/script/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat({
        path: 'client.js'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dev/js'));
});

gulp.task('vendorjs', function(){
    return gulp.src([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/html5shiv/dist/html5shiv.js',
        './node_modules/gsap/src/minified/TweenMax.min.js'
    ])
    .pipe(concat({
        path: 'vendor.js'
    }))
    .pipe(gulp.dest('./dev/js'));
});


gulp.task('deploy', function() {
    return gulp.src('./dev/**/*')
    .pipe(ghPages());
});


gulp.task('default', ['sass','script'], function () {
    gulp.watch('./dev/sass/**/*.scss', ['sass']);
    gulp.watch('./dev/script/*.js', ['script']);
});