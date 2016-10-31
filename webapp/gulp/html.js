'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

module.exports = function(options) {
    gulp.task('html-serve', function() {
        return gulp.src(options.src + '/app/**/*.html')
            .pipe(gulp.dest(options.tmp + '/serve/src/app'))
            .pipe(browserSync.reload({
                stream: true
            }))
            .pipe($.size());
    });
};