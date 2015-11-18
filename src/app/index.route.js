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
      }).state('globalVECDirectNav', {
        url: '/methods/globalVECDirectNav',
        templateUrl: 'app/testImplementationMethods/globalVECDirectNav/globalMbox.html',
        controller: 'GlobalVECDirectNavController',
        controllerAs: 'globalDirectNav'
      }).state('globalMboxWithOffer', {
        url: '/methods/globalMboxWithOffer',
        templateUrl: 'app/testImplementationMethods/globalWithOffer/globalMboxWithOffer.html',
        controller: 'GlobalMboxWithOfferController',
        controllerAs: 'globalWithOffer'
      }).state('createMbox', {
        url: '/methods/createMbox',
        templateUrl: 'app/testImplementationMethods/create/create.html',
        controller: 'CreateMboxController',
        controllerAs: 'create'
      }).state('routeChange', {
        url: '/methods/routeChange',
        templateUrl: 'app/testImplementationMethods/routeChange/routeChange.html',
        controller: 'RouteChangeController',
        controllerAs: 'routeChange',
        resolve: {
          offerData: function(adobeTargetOfferService){return adobeTargetOfferService.getOffer();}
        }
      }).state('hashChangeEvent', {
        url: '/methods/hashChangeEvent',
        templateUrl: 'app/testImplementationMethods/hashChangeEvent/hashChangeEvent.html',
        controller: 'HashChangeEventController',
        controllerAs: 'hashChange',
        resolve: {
          offerData: function(adobeTargetOfferService){return adobeTargetOfferService.getOffer();}
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
