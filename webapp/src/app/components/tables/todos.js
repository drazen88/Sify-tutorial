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
        .directive('todos', function() {
            return {
                restrict: 'E',
                scope: {

                },
                templateUrl: 'src/app/components/tables/todos.html',
                controller: 'TodosController'
            };
        });

    angular
        .module('webapp')
        .controller('TodosController', TodosController);

    TodosController.$inject = ['$scope', 'eventBus', 'todoApi', 'modalWindows'];

    function TodosController($scope, eventBus, todoApi, modalWindows) {
        $scope.model = [];
        $scope.errorCode = null;
        $scope.onTodoUpdated = eventBus.onEvent('TodoUpdated', onTodoUpdated);
        $scope.onClickEditTodo = onClickEditTodo;
        $scope.onClickDeleteTodo = onClickDeleteTodo;

        load();

        function load() {

            todoApi.todos().then(onSuccess, onError);

            function onSuccess(response) {
                $scope.model = response.data;
            }

            function onError(response) {
                if (response.status && response.statusText) {
                    $scope.errorCode = response.statusText;
                } else {
                    $scope.errorCode = 'Unknown error';
                }
            }

        }

        function onTodoUpdated(event, payload) {
            load();
        }

        function onClickEditTodo(item) {
            modalWindows.openEditTodo({
                id: item.id
            });
        }

        function onClickDeleteTodo(item) {
            modalWindows.openDeleteTodo({
                id: item.id
            });
        }

    }
})();