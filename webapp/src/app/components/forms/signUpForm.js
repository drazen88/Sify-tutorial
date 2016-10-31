(function() {
    'use strict';

    angular
        .module('webapp')
        .directive('signUpForm', function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'src/app/components/forms/signUpForm.html',
                controller: 'SignUpFormController'
            };
        });

    angular
        .module('webapp')
        .controller('SignUpFormController', SignUpFormController);

    SignUpFormController.$inject = ['$scope', '$state', 'authenticationApi'];

    function SignUpFormController($scope, $state, authenticationApi) {

        $scope.model = {};
        $scope.errorCode = null;
        $scope.submit = submit;

        function submit(form) {
            if (form !== undefined && form.$submitted && form.$invalid) {
                return false;
            }
            authenticationApi.signUp($scope.model).then(onSuccess, onError);

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