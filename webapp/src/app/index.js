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