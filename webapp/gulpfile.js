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
(function() {
    'use strict';
    var gulp = require('gulp');
    var gutil = require('gulp-util');
    var fs = require('fs-extra');

    var options = {
        src: 'src',
        dist: 'dist',
        tmp: '.tmp',
        e2e: 'e2e',
        errorHandler: function(title) {
            return function(err) {
                gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
                this.emit('end');
            };
        },
        wiredep: {
            directory: 'bower_components'
        }
    };

    fs.readdirSync('./gulp').filter(function(file) {
        return (/\.(js|coffee)$/i).test(file);
    }).map(function(file) {
        require('./gulp/' + file)(options);
    });

    gulp.task('default', ['clean'], function() {
        gulp.start('build');
    });
})();