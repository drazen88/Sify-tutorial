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