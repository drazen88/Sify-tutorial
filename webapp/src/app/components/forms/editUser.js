(function() {
    'use strict';

    angular
        .module('webapp')
        .directive('editUser', function() {
            return {
                restrict: 'E',
                scope: {
                    id: '='
                },
                templateUrl: 'src/app/components/forms/editUser.html',
                controller: 'EditUserController'
            };
        });

    angular
        .module('webapp')
        .controller('EditUserController', EditUserController);

    EditUserController.$inject = ['$scope', 'eventBus', 'userApi'];

    function EditUserController($scope, eventBus, userApi) {

        $scope.model = {};
        $scope.errorCode = null;
        $scope.submit = submit;

        if ($scope.id) load($scope.id);

        function load(id) {
            var request = {
                id: id
            };
            userApi.readUser(request).then(onSuccess, onError);

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
            userApi.updateUser($scope.model).then(onSuccess, onError);

            function onSuccess(response) {
                eventBus.emitEvent('UserUpdated');
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