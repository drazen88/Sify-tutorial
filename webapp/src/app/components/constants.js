(function() {
    'use strict';

    angular
        .module('webapp')
        .constant('userRole', [
            'ADMIN',
            'MEMBER'
        ])
        .constant('status', [
            'NOT_STARTED',
            'IN_PROGRESS',
            'DONE'
        ]);
})();