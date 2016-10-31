(function() {
    'use strict';

    angular
        .module('webapp')
        .service('authenticationApiService', authenticationApiService);

    authenticationApiService.$inject = ['$http', 'sessionService'];

    function authenticationApiService($http, sessionService) {

        var backendApiUrl = '';

        return {
            init: init,
            signUp: signUp,
            signIn: signIn,
            changePassword: changePassword
        };

        function init(backendUrl) {
            backendApiUrl = backendUrl;
        }

        /** signUp 
         * request - SignUpRequest {
         *   firstName: String
         *   lastName: String
         *   username: String
         *   password: String
         * }
         *
         * response - SignUpResponse {
         *   id: Int
         *   firstName: String
         *   lastName: String
         *   role: UserRole
         *   username: String
         * }
         *
         */
        function signUp(model) {
            return $http({
                method: 'POST',
                url: backendApiUrl + '/api/sign-up',
                data: {
                    firstName: model.firstName,
                    lastName: model.lastName,
                    username: model.username,
                    password: model.password
                }
            });
        }

        /** signIn 
         * request - SignInRequest {
         *   username: String
         *   password: String
         * }
         *
         * response - SignInResponse {
         *   accessToken: String
         *   id: Int
         *   firstName: String
         *   lastName: String
         *   role: UserRole
         *   username: String
         * }
         *
         */
        function signIn(model) {
            return $http({
                method: 'POST',
                url: backendApiUrl + '/api/sign-in',
                data: {
                    username: model.username,
                    password: model.password
                }
            });
        }

        /** changePassword (secured)
         * request - ChangePasswordRequest {
         *   oldPassword: String
         *   newPassword: String
         * }
         *
         * response - ChangePasswordResponse {
         *   id: Int
         *   firstName: String
         *   lastName: String
         *   role: UserRole
         *   username: String
         * }
         *
         */
        function changePassword(model) {
            return $http({
                method: 'POST',
                url: backendApiUrl + '/api/change-password',
                data: {
                    oldPassword: model.oldPassword,
                    newPassword: model.newPassword
                },
                headers: {
                    'Authorization': "Bearer " + sessionService.getSessionData().accessToken
                }
            });
        }

    }
})();