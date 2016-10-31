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
var browserSync = require("browser-sync");

function isOnlyChange(event) {
    return event.type === 'changed';
}

module.exports = function(options) {
    gulp.task('watch', ['inject'], function() {

        gulp.watch([options.src + '/*.html', 'bower.json'], ['inject']);

        gulp.watch([
            options.src + '/app/**/*.css',
            options.src + '/app/**/*.less'
        ], function(event) {
            if (isOnlyChange(event)) {
                gulp.start('styles');
            } else {
                gulp.start('inject');
            }
        });

        gulp.watch(options.src + '/app/**/*.js', function(event) {
            if (isOnlyChange(event)) {
                gulp.start('scripts');
            } else {
                gulp.start('inject');
            }
        });

        gulp.watch(options.src + '/app/**/*.html', function(event) {
            if (isOnlyChange(event)) {
                gulp.start('html-serve');
                browserSync.reload(event.path);
            } else {
                gulp.start('inject');
            }
        });
    });
};