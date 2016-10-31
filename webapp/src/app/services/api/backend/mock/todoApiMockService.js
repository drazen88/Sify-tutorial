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
        .service('todoApiMockService', todoApiMockService);

    todoApiMockService.$inject = ['$timeout'];

    function todoApiMockService($timeout) {

        return {
            readTodo: readTodo,
            createTodo: createTodo,
            updateTodo: updateTodo,
            deleteTodo: deleteTodo,
            todos: todos
        };

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
            $timeout(function() {
                successCallback({
                    //TODO fill up mocked data values
                }, 500);
            });
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
            $timeout(function() {
                successCallback({
                    //TODO fill up mocked data values
                }, 500);
            });
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
            $timeout(function() {
                successCallback({
                    //TODO fill up mocked data values
                }, 500);
            });
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
            $timeout(function() {
                successCallback({
                    //TODO fill up mocked data values
                }, 500);
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
            $timeout(function() {
                successCallback({
                    //TODO fill up mocked data values
                }, 500);
            });
        }
    }
})();