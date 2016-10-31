(function() {
    'use strict';

    angular
        .module('webapp')
        .controller('SignUpPageController', SignUpPageController);

    SignUpPageController.$inject = ['$scope', '$state'];

    function SignUpPageController($scope, $state) {

        $scope.onClickSignIn = onClickSignIn;

        function onClickSignIn() {
            $state.go('signInPage');
        }

    }
})();