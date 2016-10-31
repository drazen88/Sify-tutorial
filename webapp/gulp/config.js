'use strict';

var gulp = require('gulp');

var gulpNgConfig = require('gulp-ng-config');

module.exports = function(options) {
    gulp.task('config-development', function() {

        gulp.src('./environmentConfig.json')
            .pipe(gulpNgConfig('app.config', {
                environment: 'development'
            }))
            .pipe(gulp.dest('./src/app/'));
    });

    gulp.task('config-development-mock', function() {

        gulp.src('./environmentConfig.json')
            .pipe(gulpNgConfig('app.config', {
                environment: 'development-mock'
            }))
            .pipe(gulp.dest('./src/app/'));
    });

    gulp.task('config-development-remote', function() {

        gulp.src('./environmentConfig.json')
            .pipe(gulpNgConfig('app.config', {
                environment: 'development-remote'
            }))
            .pipe(gulp.dest('./src/app/'));
    });

    gulp.task('config-development-docker', function() {

        gulp.src('./environmentConfig.json')
            .pipe(gulpNgConfig('app.config', {
                environment: 'development-docker'
            }))
            .pipe(gulp.dest('./src/app/'));
    });

    gulp.task('config-deployment', function() {

        gulp.src('./environmentConfig.json')
            .pipe(gulpNgConfig('app.config', {
                environment: 'deployment'
            }))
            .pipe(gulp.dest('./src/app/'));
    });

}