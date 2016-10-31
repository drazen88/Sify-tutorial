(function() {
    'use strict';

    angular
        .module('webapp')
        .service('userApiService', userApiService);

    userApiService.$inject = ['$http', 'sessionService'];

    function userApiService($http, sessionService) {

        var backendApiUrl = '';

        return {
            init: init,
            readUser: readUser,
            createUser: createUser,
            updateUser: updateUser,
            deleteUser: deleteUser,
            users: users,
            userTodos: userTodos
        };

        function init(backendUrl) {
            backendApiUrl = backendUrl;
        }

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
            return $http({
                method: 'GET',
                url: backendApiUrl + '/api/user/' + model.id + '',
                headers: {
                    'Authorization': "Bearer " + sessionService.getSessionData().accessToken
                }
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
            return $http({
                method: 'POST',
                url: backendApiUrl + '/api/user',
                data: {
                    firstName: model.firstName,
                    lastName: model.lastName,
                    role: model.role,
                    username: model.username,
                    passwordHash: model.passwordHash
                },
                headers: {
                    'Authorization': "Bearer " + sessionService.getSessionData().accessToken
                }
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
            return $http({
                method: 'PUT',
                url: backendApiUrl + '/api/user/' + model.id + '',
                data: {
                    firstName: model.firstName,
                    lastName: model.lastName,
                    role: model.role,
                    username: model.username,
                    passwordHash: model.passwordHash
                },
                headers: {
                    'Authorization': "Bearer " + sessionService.getSessionData().accessToken
                }
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
            return $http({
                method: 'DELETE',
                url: backendApiUrl + '/api/user/' + model.id + '',
                data: {
                    id: model.id
                },
                headers: {
                    'Authorization': "Bearer " + sessionService.getSessionData().accessToken
                }
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
            return $http({
                method: 'GET',
                url: backendApiUrl + '/api/users',
                headers: {
                    'Authorization': "Bearer " + sessionService.getSessionData().accessToken
                }
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
            return $http({
                method: 'GET',
                url: backendApiUrl + '/api/user-todos',
                params: {
                    userId: model.userId
                },
                headers: {
                    'Authorization': "Bearer " + sessionService.getSessionData().accessToken
                }
            }).then(convertUserTodosResponse);
        }

        function convertUserTodosResponse(response) {
            response.data.forEach(function(item) {
                item.date = new Date(item.date);
            });
            return response;
        }
    }
})();