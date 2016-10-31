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
        .module('webapp')
        .provider('authenticationApi', authenticationApi)
        .config(authenticationApiProvider);

    function authenticationApi() {
        var isMocked = false;

        var $get = ['authenticationApiService', 'authenticationApiMockService', 'clientConfigurationValues', function(authenticationApiService, authenticationApiMockService, clientConfigurationValues) {
            if (this.isMocked) {
                return authenticationApiMockService;
            } else {
                if (clientConfigurationValues.remoteBackendUrl) {
                    authenticationApiService.init(clientConfigurationValues.remoteBackendUrl);
                }
                return authenticationApiService;
            }
        }];

        return {
            isMocked: isMocked,
            $get: $get
        };
    }

    function authenticationApiProvider(clientConfigurationValues, authenticationApiProvider) {
        authenticationApiProvider.isMocked = clientConfigurationValues.useServerMock;
    }

    angular
        .module('webapp')
        .provider('todoApi', todoApi)
        .config(todoApiProvider);

    function todoApi() {
        var isMocked = false;

        var $get = ['todoApiService', 'todoApiMockService', 'clientConfigurationValues', function(todoApiService, todoApiMockService, clientConfigurationValues) {
            if (this.isMocked) {
                return todoApiMockService;
            } else {
                if (clientConfigurationValues.remoteBackendUrl) {
                    todoApiService.init(clientConfigurationValues.remoteBackendUrl);
                }
                return todoApiService;
            }
        }];

        return {
            isMocked: isMocked,
            $get: $get
        };
    }

    function todoApiProvider(clientConfigurationValues, todoApiProvider) {
        todoApiProvider.isMocked = clientConfigurationValues.useServerMock;
    }

    angular
        .module('webapp')
        .provider('userApi', userApi)
        .config(userApiProvider);

    function userApi() {
        var isMocked = false;

        var $get = ['userApiService', 'userApiMockService', 'clientConfigurationValues', function(userApiService, userApiMockService, clientConfigurationValues) {
            if (this.isMocked) {
                return userApiMockService;
            } else {
                if (clientConfigurationValues.remoteBackendUrl) {
                    userApiService.init(clientConfigurationValues.remoteBackendUrl);
                }
                return userApiService;
            }
        }];

        return {
            isMocked: isMocked,
            $get: $get
        };
    }

    function userApiProvider(clientConfigurationValues, userApiProvider) {
        userApiProvider.isMocked = clientConfigurationValues.useServerMock;
    }

})();