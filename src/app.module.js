(function() {
    'use strict';

    /**
     * @ngdoc overview
     * @name gainmasterApp
     * @description
     * # gainmasterApp
     *
     * Main module of the application.
     */
    angular
      .module('gainmasterApp', [
        //Core
        'gainmasterApp.core',
        //Components
        'gainmasterApp.components.home'
      ])
      .config(function ($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'modules/components/home/home.html',
            controller: 'Home'
          })
          .otherwise({
            redirectTo: '/'
          });
      });
})();
