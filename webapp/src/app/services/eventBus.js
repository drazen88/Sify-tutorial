(function() {
    'use strict';

    angular
        .module('webapp')
        .factory('eventBus', eventBus);

    eventBus.$inject = ['$rootScope'];

    function eventBus($rootScope) {
        var eventBus = {};
        eventBus.emitEvent = function(eventName, data) {
            data = data || {};
            $rootScope.$emit(eventName, data);
        };

        eventBus.onEvent = function(eventName, func, scope) {
            var unbind = $rootScope.$on(eventName, func);
            if (scope) {
                scope.$on('$destroy', unbind);
            }
            return unbind;
        };

        return eventBus;
    }
})();