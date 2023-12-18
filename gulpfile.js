const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const watch = require('gulp-watch');
const imagemin = require('gulp-image-min');
const uglify = require('gulp-uglify');


function styles () {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/styles'));
}

function imagemin () {
    return gulp.src('./src/image/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

function uglify () {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'));
}


exports.default = gulp.parallel(styles);
exports.watch = function () {
    gulp.watch('./src/styles/**.scss', gulp.parallel(styles));
}