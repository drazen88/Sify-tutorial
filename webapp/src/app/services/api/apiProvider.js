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