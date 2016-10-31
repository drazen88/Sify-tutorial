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
        .service('todoApiService', todoApiService);

    todoApiService.$inject = ['$http', 'sessionService'];

    function todoApiService($http, sessionService) {

        var backendApiUrl = '';

        return {
            init: init,
            readTodo: readTodo,
            createTodo: createTodo,
            updateTodo: updateTodo,
            deleteTodo: deleteTodo,
            todos: todos
        };

        function init(backendUrl) {
            backendApiUrl = backendUrl;
        }

        /** readTodo 
         * request - Unit
         *
         * response - ReadTodoResponse {
         *   id: Int
         *   userId: Int
         *   task: String
         *   date: DateTime
         *   status: Status
         * }
         *
         */
        function readTodo(model) {
            return $http({
                method: 'GET',
                url: backendApiUrl + '/api/todo/' + model.id + ''
            }).then(convertReadTodoResponse);
        }

        function convertReadTodoResponse(response) {
            response.data.date = new Date(response.data.date);
            return response;
        }

        /** createTodo 
         * request - CreateTodoRequest {
         *   userId: Int
         *   task: String
         *   date: DateTime
         *   status: Status
         * }
         *
         * response - CreateTodoResponse {
         *   id: Int
         *   userId: Int
         *   task: String
         *   date: DateTime
         *   status: Status
         * }
         *
         */
        function createTodo(model) {
            return $http({
                method: 'POST',
                url: backendApiUrl + '/api/todo',
                data: {
                    userId: model.userId,
                    task: model.task,
                    date: model.date,
                    status: model.status
                }
            }).then(convertCreateTodoResponse);
        }

        function convertCreateTodoResponse(response) {
            response.data.date = new Date(response.data.date);
            return response;
        }

        /** updateTodo 
         * request - RestUpdateTodoRequest {
         *   userId: Int
         *   task: String
         *   date: DateTime
         *   status: Status
         * }
         *
         * response - UpdateTodoResponse {
         *   id: Int
         *   userId: Int
         *   task: String
         *   date: DateTime
         *   status: Status
         * }
         *
         */
        function updateTodo(model) {
            return $http({
                method: 'PUT',
                url: backendApiUrl + '/api/todo/' + model.id + '',
                data: {
                    userId: model.userId,
                    task: model.task,
                    date: model.date,
                    status: model.status
                }
            }).then(convertUpdateTodoResponse);
        }

        function convertUpdateTodoResponse(response) {
            response.data.date = new Date(response.data.date);
            return response;
        }

        /** deleteTodo 
         * request - DeleteTodoRequest {
         *   id: Int
         * }
         *
         * response - Unit
         *
         */
        function deleteTodo(model) {
            return $http({
                method: 'DELETE',
                url: backendApiUrl + '/api/todo/' + model.id + '',
                data: {
                    id: model.id
                }
            });
        }

        /** todos (secured)
         * request - Unit
         *
         * response - List [
         *   TodosResponse {
         *     id: Int
         *     userUsername: String
         *     task: String
         *     date: DateTime
         *     status: Status
         *   }
         * ]
         *
         */
        function todos() {
            return $http({
                method: 'GET',
                url: backendApiUrl + '/api/todos',
                headers: {
                    'Authorization': "Bearer " + sessionService.getSessionData().accessToken
                }
            }).then(convertTodosResponse);
        }

        function convertTodosResponse(response) {
            response.data.forEach(function(item) {
                item.date = new Date(item.date);
            });
            return response;
        }
    }
})();