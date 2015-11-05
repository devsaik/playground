(function() {
  'use strict';

  angular
    .module('testingpod')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('globalMbox', {
        url: '/methods/globalMbox',
        templateUrl: 'app/testImplementationMethods/global/globalMbox.html',
        controller: 'GlobalMboxController',
        controllerAs: 'global'
      }).state('createMbox', {
        url: '/methods/createMbox',
        templateUrl: 'app/testImplementationMethods/create/create.html',
        controller: 'CreateMboxController',
        controllerAs: 'create'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
