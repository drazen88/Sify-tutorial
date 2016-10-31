(function() {
    'use strict';

    angular
        .module('webapp')
        .service('authenticationApiMockService', authenticationApiMockService);

    authenticationApiMockService.$inject = ['$timeout'];

    function authenticationApiMockService($timeout) {

        return {
            signUp: signUp,
            signIn: signIn,
            changePassword: changePassword
        };

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
            $timeout(function() {
                successCallback({
                    //TODO fill up mocked data values
                }, 500);
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
            $timeout(function() {
                successCallback({
                    //TODO fill up mocked data values
                }, 500);
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
            $timeout(function() {
                successCallback({
                    //TODO fill up mocked data values
                }, 500);
            });
        }
    }
})();