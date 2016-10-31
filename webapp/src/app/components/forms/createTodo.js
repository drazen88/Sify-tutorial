(function() {
    'use strict';

    angular
        .module('webapp')
        .directive('createTodo', function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'src/app/components/forms/createTodo.html',
                controller: 'CreateTodoController'
            };
        });

    angular
        .module('webapp')
        .controller('CreateTodoController', CreateTodoController);

    CreateTodoController.$inject = ['$scope', 'eventBus', 'todoApi'];

    function CreateTodoController($scope, eventBus, todoApi) {

        $scope.model = {};
        $scope.errorCode = null;
        $scope.submit = submit;

        function submit(form) {
            if (form !== undefined && form.$submitted && form.$invalid) {
                return false;
            }
            todoApi.createTodo($scope.model).then(onSuccess, onError);

            function onSuccess(response) {
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