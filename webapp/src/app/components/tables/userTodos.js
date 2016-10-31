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
        .directive('userTodos', function() {
            return {
                restrict: 'E',
                scope: {
                    visible: '=',
                    userId: '='
                },
                templateUrl: 'src/app/components/tables/userTodos.html',
                controller: 'UserTodosController'
            };
        });

    angular
        .module('webapp')
        .controller('UserTodosController', UserTodosController);

    UserTodosController.$inject = ['$scope', 'eventBus', 'userApi'];

    function UserTodosController($scope, eventBus, userApi) {
        $scope.model = [];
        $scope.errorCode = null;
        $scope.onViewTodos = eventBus.onEvent('ViewTodos', onViewTodos);

        if ($scope.userId) load($scope.userId);

        function load(userId) {
            var request = {
                userId: userId
            };
            userApi.userTodos(request).then(onSuccess, onError);

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

        function onViewTodos(event, payload) {
            load(payload.id);
            $scope.visible = true;
        }

    }
})();