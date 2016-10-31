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