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