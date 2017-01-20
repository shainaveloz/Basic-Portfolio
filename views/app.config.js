(function(){
    'use strict';

    angular
        .module('portfolioApp')
        .run(appRun);

        appRun.$inject = ['routerHelper'];
        /* @ngInject */
        function appRun(routerHelper) {
            routerHelper.configureStates(getStates());
        }

        function getStates() {
            return [
                {
                    state: 'home',
                    config: {
                        url: '/',
                        templateUrl: 'app/views/index.html',
                        title: 'Home'
                    }
                }
            ];
        }
})()



