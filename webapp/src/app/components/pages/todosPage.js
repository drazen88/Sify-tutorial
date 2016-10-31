(function() {
    'use strict';

    angular
        .module('webapp')
        .controller('TodosPageController', TodosPageController);

    TodosPageController.$inject = ['$scope', 'modalWindows', 'eventBus'];

    function TodosPageController($scope, modalWindows, eventBus) {

        $scope.onClickAddTodo = onClickAddTodo;

        function onClickAddTodo() {
            modalWindows.openCreateTodo();
        }

    }
})();