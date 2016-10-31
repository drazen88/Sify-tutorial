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