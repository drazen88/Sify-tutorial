(function() {
    'use strict';

    angular
        .module('webapp')
        .controller('UsersPageController', UsersPageController);

    UsersPageController.$inject = ['$scope', 'modalWindows', 'eventBus'];

    function UsersPageController($scope, modalWindows, eventBus) {

        $scope.onClickAddUser = onClickAddUser;

        function onClickAddUser() {
            modalWindows.openCreateUser();
        }

    }
})();