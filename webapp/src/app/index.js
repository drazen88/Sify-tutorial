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
        .module('webapp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router',
            'ui.bootstrap', 'ngMessages', 'pascalprecht.translate', 'app.config'
        ])
        .config(appConfig)

    .run(run);

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function appConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('usersPage', {
                url: '/webportal/users',
                templateUrl: 'src/app/components/pages/usersPage.html',
                controller: 'UsersPageController'
            })
            .state('todosPage', {
                url: '/webportal/todos',
                templateUrl: 'src/app/components/pages/todosPage.html',
                controller: 'TodosPageController'
            })
            .state('signInPage', {
                url: '/webportal/sign-in',
                templateUrl: 'src/app/components/pages/signInPage.html',
                controller: 'SignInPageController'
            })
            .state('signUpPage', {
                url: '/webportal/sign-up',
                templateUrl: 'src/app/components/pages/signUpPage.html',
                controller: 'SignUpPageController'
            });

        $urlRouterProvider.otherwise('/webportal/sign-in');
    }

    run.$inject = ['$rootScope', '$state', 'sessionService', '$log'];

    function run($rootScope, $state, sessionService, $log) {
        $rootScope.$on('$stateChangeStart', function(ev, to) {
            if (to.name === 'signInPage') {
                sessionService.clear();
            } else if (!sessionService.canUserAccessState(to.name)) {
                $log.warn('Unauthorized access to secured page, redirecting to signIn.');
                ev.preventDefault();
                $state.go('signInPage');
            }
            $rootScope.pageTitle = to.title;
        });
    }

})();