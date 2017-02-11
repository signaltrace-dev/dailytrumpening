var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-minify-css');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function () {
    gulp.src('./assets/stylesheets/sass/index.scss')
    .pipe(sass())
    .pipe(cssmin())
    .pipe(gulp.dest('./assets/stylesheets/'));
});

gulp.task('scripts', function() {
    gulp.src(['./assets/js/src/vendor/**/*.js'])
        .pipe(concat('vendor.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'));

    gulp.src(['./assets/js/src/*.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('app.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'));
})

gulp.task('default', function() {
    gulp.run('styles', 'scripts');
})
