(function() {
    'use strict';

    angular
        .module('webapp')
        .directive('createUser', function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'src/app/components/forms/createUser.html',
                controller: 'CreateUserController'
            };
        });

    angular
        .module('webapp')
        .controller('CreateUserController', CreateUserController);

    CreateUserController.$inject = ['$scope', 'eventBus', 'userApi'];

    function CreateUserController($scope, eventBus, userApi) {

        $scope.model = {};
        $scope.errorCode = null;
        $scope.submit = submit;

        function submit(form) {
            if (form !== undefined && form.$submitted && form.$invalid) {
                return false;
            }
            userApi.createUser($scope.model).then(onSuccess, onError);

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