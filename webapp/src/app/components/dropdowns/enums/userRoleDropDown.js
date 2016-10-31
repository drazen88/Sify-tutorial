/**
 * Copyright 2016 dryTools doo
 * Email: contact@drytools.co
 * 
 * This file is part of todo.
 * 
 * todo is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * todo is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with todo. If not, see <http://www.gnu.org/licenses/>.*
 **/
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