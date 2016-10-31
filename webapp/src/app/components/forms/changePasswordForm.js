(function() {
    'use strict';

    angular
        .module('webapp')
        .directive('changePasswordForm', function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'src/app/components/forms/changePasswordForm.html',
                controller: 'ChangePasswordFormController'
            };
        });

    angular
        .module('webapp')
        .controller('ChangePasswordFormController', ChangePasswordFormController);

    ChangePasswordFormController.$inject = ['$scope', '$state', 'authenticationApi'];

    function ChangePasswordFormController($scope, $state, authenticationApi) {

        $scope.model = {};
        $scope.errorCode = null;
        $scope.submit = submit;

        function submit(form) {
            if (form !== undefined && form.$submitted && form.$invalid) {
                return false;
            }
            authenticationApi.changePassword($scope.model).then(onSuccess, onError);

            function onSuccess(response) {
                $state.go('signInPage');
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