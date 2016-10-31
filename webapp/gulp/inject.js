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

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;

var fileinclude = require('gulp-file-include');

module.exports = function(options) {

    gulp.task('inject', ['scripts', 'styles'], function() {
        var injectStyles = gulp.src([
            options.tmp + '/serve/app/**/*.css',
            '!' + options.tmp + '/serve/app/vendor.css'
        ], {
            read: false
        });
        var injectHtmls = gulp.src([options.src + '/**/*.html'])
            .pipe(fileinclude())
            .pipe(gulp.dest(options.tmp + '/serve/src'));
        var injectScripts = gulp.src([
                options.src + '/app/**/*.js',
                '!' + options.src + '/app/**/*.spec.js',
                '!' + options.src + '/app/**/*.mock.js'
            ])
            .pipe($.angularFilesort()).on('error', options.errorHandler('AngularFilesort'));
        var injectOptions = {
            ignorePath: [options.src, options.tmp + '/serve'],
            addRootSlash: false
        };
        return gulp.src(options.src + '/**/*.html')
            .pipe($.inject(injectHtmls, injectOptions))
            .pipe($.inject(injectStyles, injectOptions))
            .pipe($.inject(injectScripts, injectOptions))
            .pipe(wiredep(options.wiredep))
            .pipe(gulp.dest(options.tmp + '/serve'));
    });
};