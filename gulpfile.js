const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

 

//compile scss into css
function style() {
    return gulp.src('./scss/**/*.scss')                            //1. where is my scss file
           .pipe(sass().on('error', sass.logError))                //2. pass that file throuh the sass compiler
           .pipe(sourcemaps.init())
           .pipe(autoprefixer({cascade: false}))
           .pipe(sourcemaps.write())
           .pipe(gulp.dest('./css'))                               //3. where do I save the compiled css?
           .pipe(browserSync.stream());                            //4. stream changes toa all browser
}

 

function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

 

exports.style = style;
exports.watch = watch;
exports.default = watch;