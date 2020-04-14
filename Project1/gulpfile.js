'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var smartgrid = require('smart-grid');
var autoprefixer = require('gulp-autoprefixer');

/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'scss', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '30px', /* gutter width px || % */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1200px', /* max-width оn very large screen */
        fields: '0' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1100px', /* -> @media (max-width: 1100px) */
            fields: '20px'
        },
        md: {
            width: '960px'
        },
        sm: {
            width: '780px',
        },
        xs: {
            width: '560px'
        }
        /* 
        We can create any quantity of break points.

        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    }
};

smartgrid('./sass', settings);

 
gulp.task('sass', function () {
    gulp.src('./sass/**/*.scss') //  <-- There
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('auto',  function () {
    return gulp.src('css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'));

    });

//This --> './sass/main.scss'