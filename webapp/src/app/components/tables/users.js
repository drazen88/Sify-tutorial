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