/**
 * Copyright 2016 dryTools doo
 * Email: contact@drytools.co
 * 
 * This file is part of todo.
 * 
 * todo is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * todo is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with todo. If not, see <http://www.gnu.org/licenses/>.*
 **/
'use strict';

var gulp = require('gulp');
var zip = require('gulp-zip');
var del = require('del');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

module.exports = function(options) {
    gulp.task('partials', function() {
        return gulp.src([
                options.src + '/app/**/*.html',
                options.tmp + '/serve/app/**/*.html'
            ])
            .pipe($.minifyHtml({
                empty: true,
                spare: true,
                quotes: true
            }))
            .pipe($.angularTemplatecache('templateCacheHtml.js', {
                module: 'webapp',
                root: 'src/app'
            }))
            .pipe(gulp.dest(options.tmp + '/dist/partials/'));
    });

    gulp.task('html', ['inject', 'partials'], function() {
        var partialsInjectFile = gulp.src(options.tmp + '/dist/partials/templateCacheHtml.js', {
            read: false
        });
        var partialsInjectOptions = {
            ignorePath: [options.tmp + '/dist'],
            starttag: '<!-- inject:partials -->',
            endtag: '<!-- endinject -->',
            addRootSlash: false
        };

        var jsFilter = $.filter('**/*.js');
        var cssFilter = $.filter('**/*.css');

        return gulp.src([options.tmp + '/serve/**/*.html', '!' + options.tmp + '/serve/app/**/*.html', '!' + options.tmp + '/serve/src/**/*.html'])
            .pipe($.inject(partialsInjectFile, partialsInjectOptions))
            .pipe($.useref())
            .pipe(cssFilter)
            .pipe($.rev())
            .pipe($.csso())
            .pipe(cssFilter.restore())

        .pipe(jsFilter)
            .pipe($.rev())
            .pipe(jsFilter.restore())

        .pipe($.revReplace())
            .pipe(gulp.dest(options.tmp + '/dist'))
            .pipe($.size({
                title: options.dist + '/',
                showFiles: true
            }));
    });

    // Only applies for fonts from bower dependencies
    // Custom fonts are handled by the "other" task
    gulp.task('build-fonts', function() {
        return gulp.src(options.dist + '/../bower_components/**/*.{otf,eot,svg,ttf,woff,woff2}')
            .pipe($.flatten())
            .pipe(gulp.dest(options.tmp + '/dist/fonts/'));
    });

    gulp.task('other', function() {
        return gulp.src([
                options.src + '/**/*.{png,jpg,jpeg}',
                '!' + options.src + '/**/*.{html,css,js,less}'
            ])
            .pipe(gulp.dest(options.tmp + '/dist'));
    });

    gulp.task('clean', function(done) {
        $.del([options.dist + '/', options.tmp + '/'], done);
    });

    gulp.task('zip', function() {
        return gulp.src(options.tmp + '/dist/*')
            .pipe(zip('dist.zip'))
            .pipe(gulp.dest(options.tmp));
    });

    gulp.task('build', ['html', 'build-fonts', 'other']);

};