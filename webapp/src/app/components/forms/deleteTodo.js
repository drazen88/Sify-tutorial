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
        .directive('deleteTodo', function() {
            return {
                restrict: 'E',
                scope: {
                    id: '='
                },
                templateUrl: 'src/app/components/forms/deleteTodo.html',
                controller: 'DeleteTodoController'
            };
        });

    angular
        .module('webapp')
        .controller('DeleteTodoController', DeleteTodoController);

    DeleteTodoController.$inject = ['$scope', 'eventBus', 'todoApi'];

    function DeleteTodoController($scope, eventBus, todoApi) {

        $scope.model = {};
        $scope.errorCode = null;
        $scope.submit = submit;

        if ($scope.id) load($scope.id);

        function load(id) {
            var request = {
                id: id
            };
            todoApi.readTodo(request).then(onSuccess, onError);

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

        function submit(form) {
            if (form !== undefined && form.$submitted && form.$invalid) {
                return false;
            }
            todoApi.deleteTodo($scope.model).then(onSuccess, onError);

            function onSuccess(response) {
                response.data.date = new Date(response.data.date);
                eventBus.emitEvent('TodoUpdated');
                eventBus.emitEvent('ModalClose');
                $scope.errorCode = null;
            }

            function onError(response) {
                if (response.status && response.statusText) {
                    $scope.errorCode = response.statusText;
                } else {
                    $scope.errorCode = 'Unknown error';
                }
            }

        }

    }

})();