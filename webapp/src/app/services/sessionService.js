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
        .service('sessionService', sessionService);

    function sessionService() {

        /* jshint ignore:start */
        var publicStates = [];
        publicStates['signInPage'] = true;
        publicStates['signUpPage'] = true;

        var stateAccessRights = [];
        stateAccessRights['usersPage'] = [];
        stateAccessRights['usersPage']['ADMIN'] = true;
        stateAccessRights['usersPage']['MEMBER'] = false;

        stateAccessRights['todosPage'] = [];
        stateAccessRights['todosPage']['ADMIN'] = true;
        stateAccessRights['todosPage']['MEMBER'] = true;

        /* jshint ignore:end */

        return {
            save: save,
            clear: clear,
            getSessionData: getSessionData,
            isLoggedIn: isLoggedIn,
            canUserAccessState: canUserAccessState
        };

        function save(sessionData) {
            localStorage.setItem('accessToken', sessionData.accessToken);
            localStorage.setItem('id', sessionData.id);
            localStorage.setItem('firstName', sessionData.firstName);
            localStorage.setItem('lastName', sessionData.lastName);
            localStorage.setItem('role', sessionData.role);
            localStorage.setItem('username', sessionData.username);
        }

        function clear() {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('id');
            localStorage.removeItem('firstName');
            localStorage.removeItem('lastName');
            localStorage.removeItem('role');
            localStorage.removeItem('username');
        }

        function getSessionData() {
            return {
                accessToken: localStorage.getItem('accessToken'),
                id: localStorage.getItem('id'),
                firstName: localStorage.getItem('firstName'),
                lastName: localStorage.getItem('lastName'),
                role: localStorage.getItem('role'),
                username: localStorage.getItem('username')
            };
        }

        function isLoggedIn() {
            return localStorage.getItem("accessToken") !== null;
        }

        function canUserAccessState(stateName) {
            if (publicStates[stateName]) {
                return true;
            }

            var user = getSessionData();
            if (!user) {
                return false;
            }

            return stateAccessRights[stateName][user.role];
        }

    }

})();