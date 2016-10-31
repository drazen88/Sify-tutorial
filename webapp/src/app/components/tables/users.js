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
        .directive('users', function() {
            return {
                restrict: 'E',
                scope: {

                },
                templateUrl: 'src/app/components/tables/users.html',
                controller: 'UsersController'
            };
        });

    angular
        .module('webapp')
        .controller('UsersController', UsersController);

    UsersController.$inject = ['$scope', 'eventBus', 'userApi', 'modalWindows'];

    function UsersController($scope, eventBus, userApi, modalWindows) {
        $scope.model = [];
        $scope.errorCode = null;
        $scope.onUserUpdated = eventBus.onEvent('UserUpdated', onUserUpdated);
        $scope.onClickViewUserTodos = onClickViewUserTodos;
        $scope.onClickEditUser = onClickEditUser;
        $scope.onClickDeleteUser = onClickDeleteUser;

        load();

        function load() {

            userApi.users().then(onSuccess, onError);

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

        function onUserUpdated(event, payload) {
            load();
        }

        function onClickViewUserTodos(item) {
            eventBus.emitEvent('ViewTodos', {
                id: item.id
            });
        }

        function onClickEditUser(item) {
            modalWindows.openEditUser({
                id: item.id
            });
        }

        function onClickDeleteUser(item) {
            modalWindows.openDeleteUser({
                id: item.id
            });
        }

    }
})();