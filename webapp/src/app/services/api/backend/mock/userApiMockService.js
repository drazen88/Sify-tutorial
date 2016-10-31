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
        .service('userApiMockService', userApiMockService);

    userApiMockService.$inject = ['$timeout'];

    function userApiMockService($timeout) {

        return {
            readUser: readUser,
            createUser: createUser,
            updateUser: updateUser,
            deleteUser: deleteUser,
            users: users,
            userTodos: userTodos
        };

        /** readUser (secured)
         * request - Unit
         *
         * response - ReadUserResponse {
         *   id: Int
         *   firstName: String
         *   lastName: String
         *   role: UserRole
         *   username: String
         *   passwordHash: String
         * }
         *
         */
        function readUser(model) {
            $timeout(function() {
                successCallback({
                    //TODO fill up mocked data values
                }, 500);
            });
        }

        /** createUser (secured)
         * request - CreateUserRequest {
         *   firstName: String
         *   lastName: String
         *   role: UserRole
         *   username: String
         *   passwordHash: String
         * }
         *
         * response - CreateUserResponse {
         *   id: Int
         *   firstName: String
         *   lastName: String
         *   role: UserRole
         *   username: String
         *   passwordHash: String
         * }
         *
         */
        function createUser(model) {
            $timeout(function() {
                successCallback({
                    //TODO fill up mocked data values
                }, 500);
            });
        }

        /** updateUser (secured)
         * request - RestUpdateUserRequest {
         *   firstName: String
         *   lastName: String
         *   role: UserRole
         *   username: String
         *   passwordHash: String
         * }
         *
         * response - UpdateUserResponse {
         *   id: Int
         *   firstName: String
         *   lastName: String
         *   role: UserRole
         *   username: String
         *   passwordHash: String
         * }
         *
         */
        function updateUser(model) {
            $timeout(function() {
                successCallback({
                    //TODO fill up mocked data values
                }, 500);
            });
        }

        /** deleteUser (secured)
         * request - DeleteUserRequest {
         *   id: Int
         * }
         *
         * response - Unit
         *
         */
        function deleteUser(model) {
            $timeout(function() {
                successCallback({
                    //TODO fill up mocked data values
                }, 500);
            });
        }

        /** users (secured)
         * request - Unit
         *
         * response - List [
         *   UsersResponse {
         *     id: Int
         *     firstName: String
         *     lastName: String
         *     role: UserRole
         *     username: String
         *     passwordHash: String
         *   }
         * ]
         *
         */
        function users() {
            $timeout(function() {
                successCallback({
                    //TODO fill up mocked data values
                }, 500);
            });
        }

        /** userTodos (secured)
         * request - Unit
         *
         * response - List [
         *   UserTodosResponse {
         *     id: Int
         *     userId: Int
         *     task: String
         *     date: DateTime
         *     status: Status
         *   }
         * ]
         *
         */
        function userTodos(model) {
            $timeout(function() {
                successCallback({
                    //TODO fill up mocked data values
                }, 500);
            });
        }
    }
})();