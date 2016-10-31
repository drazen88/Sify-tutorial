(function() {
    'use strict';

    angular
        .module('webapp')
        .directive('signInForm', function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'src/app/components/forms/signInForm.html',
                controller: 'SignInFormController'
            };
        });

    angular
        .module('webapp')
        .controller('SignInFormController', SignInFormController);

    SignInFormController.$inject = ['$scope', 'sessionService', '$state', 'eventBus', 'authenticationApi'];

    function SignInFormController($scope, sessionService, $state, eventBus, authenticationApi) {

        $scope.model = {};
        $scope.errorCode = null;
        $scope.submit = submit;

        function submit(form) {
            if (form !== undefined && form.$submitted && form.$invalid) {
                return false;
            }
            authenticationApi.signIn($scope.model).then(onSuccess, onError);

            function onSuccess(response) {

                sessionService.save(response.data);
                eventBus.emitEvent('UserSignedIn', {
                    accessToken: response.data.accessToken,
                    id: response.data.id,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    role: response.data.role,
                    username: response.data.username
                });
                $state.go('usersPage');
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