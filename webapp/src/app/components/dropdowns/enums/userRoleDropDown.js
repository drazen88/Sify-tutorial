(function() {
    'use strict';

    angular
        .module('webapp')
        .directive('userRoleDropDown', function() {
            return {
                restrict: 'E',
                scope: {
                    htmlName: '@',
                    htmlRequired: '@',
                    htmlId: '@',
                    selectedId: '='
                },
                templateUrl: 'src/app/components/dropdowns/enums/userRoleDropDown.html',
                controller: 'UserRoleDropDownController'
            };
        });

    angular
        .module('webapp')
        .controller('UserRoleDropDownController', UserRoleDropDownController);

    UserRoleDropDownController.$inject = ['$scope', 'userRole'];

    function UserRoleDropDownController($scope, userRole) {

        $scope.model = userRole;

    }
})();