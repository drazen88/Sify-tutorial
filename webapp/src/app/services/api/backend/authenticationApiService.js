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