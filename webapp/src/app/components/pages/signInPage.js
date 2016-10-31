(function() {
    'use strict';

    angular
        .module('webapp')
        .controller('SignInPageController', SignInPageController);

    SignInPageController.$inject = ['$scope', '$state'];

    function SignInPageController($scope, $state) {

        $scope.onClickSignUp = onClickSignUp;

        function onClickSignUp() {
            $state.go('signUpPage');
        }

    }
})();