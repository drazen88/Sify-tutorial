(function() {
    'use strict';

    angular
        .module('webapp')
        .directive('statusDropDown', function() {
            return {
                restrict: 'E',
                scope: {
                    htmlName: '@',
                    htmlRequired: '@',
                    htmlId: '@',
                    selectedId: '='
                },
                templateUrl: 'src/app/components/dropdowns/enums/statusDropDown.html',
                controller: 'StatusDropDownController'
            };
        });

    angular
        .module('webapp')
        .controller('StatusDropDownController', StatusDropDownController);

    StatusDropDownController.$inject = ['$scope', 'status'];

    function StatusDropDownController($scope, status) {

        $scope.model = status;

    }
})();