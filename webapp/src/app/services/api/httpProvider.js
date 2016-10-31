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

    angular
        .module('webapp').factory('httpInterceptor', httpInterceptor);

    httpInterceptor.$inject = ['$q', '$location', '$log'];

    function httpInterceptor($q, $location, $log) {
        return {
            responseError: function(rejection) {
                if (rejection && rejection.status) {
                    switch (rejection.status) {
                        case 401:
                        case 403:
                            $log.error('Unauthorized');
                            $location.path('/signIn');
                            break;
                    }
                }
                return $q.reject(rejection);
            }
        };
    }

    angular
        .module('webapp').config(['$httpProvider', function($httpProvider) {
            $httpProvider.interceptors.push('httpInterceptor');
        }]);
})();