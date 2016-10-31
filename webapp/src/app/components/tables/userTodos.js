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