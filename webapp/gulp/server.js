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
var browserSyncSpa = require('browser-sync-spa');

var util = require('util');

module.exports = function(options) {

    function browserSyncInit(baseDir, browser) {
        browser = browser === undefined ? 'default' : browser;

        var routes = null;
        if (baseDir === options.src || (util.isArray(baseDir) && baseDir.indexOf(options.src) !== -1)) {
            routes = {
                '/bower_components': 'bower_components'
            };
        }

        var server = {
            baseDir: baseDir,
            routes: routes
        };

        browserSync.instance = browserSync.init({
            startPath: '/',
            server: server,
            browser: browser
        });
    }

    browserSync.use(browserSyncSpa({
        selector: '[ng-app]' // Only needed for angular apps
    }));

    gulp.task('serve', ['watch'], function() {
        browserSyncInit([options.tmp + '/serve', options.src]);
    });

    gulp.task('serve:dist', ['build'], function() {
        browserSyncInit(options.dist);
    });

    gulp.task('serve:e2e', ['inject'], function() {
        browserSyncInit([options.tmp + '/serve', options.src], []);
    });

    gulp.task('serve:e2e-dist', ['build'], function() {
        browserSyncInit(options.dist, []);
    });
};