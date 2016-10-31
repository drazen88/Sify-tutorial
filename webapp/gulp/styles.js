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
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;

module.exports = function(options) {
    gulp.task('styles', function() {
        var lessOptions = {
            options: [
                'bower_components',
                options.src + '/app'
            ]
        };

        var injectFiles = gulp.src([
            options.src + '/app/**/*.less',
            '!' + options.src + '/app/index.less',
            '!' + options.src + '/app/vendor.less'
        ], {
            read: false
        });

        var injectOptions = {
            transform: function(filePath) {
                filePath = filePath.replace(options.src + '/app/', '');
                return '@import \'' + filePath + '\';';
            },
            starttag: '// injector',
            endtag: '// endinjector',
            addRootSlash: false
        };

        var indexFilter = $.filter('index.less');
        var vendorFilter = $.filter('vendor.less');

        return gulp.src([
                options.src + '/app/index.less',
                options.src + '/app/vendor.less'
            ])
            .pipe(indexFilter)
            .pipe($.inject(injectFiles, injectOptions))
            .pipe(indexFilter.restore())
            .pipe(vendorFilter)
            .pipe(wiredep(options.wiredep))
            .pipe(vendorFilter.restore())
            .pipe($.sourcemaps.init())
            .pipe($.less(lessOptions)).on('error', options.errorHandler('Less'))
            .pipe($.autoprefixer()).on('error', options.errorHandler('Autoprefixer'))
            .pipe($.sourcemaps.write())
            .pipe(gulp.dest(options.tmp + '/serve/app/'))
            .pipe(browserSync.reload({
                stream: true 
            }));
    });
};