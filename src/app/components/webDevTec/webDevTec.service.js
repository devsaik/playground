(function() {
  'use strict';

  angular
      .module('testingpod')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'title': 'globalMbox',
        'url': '#/methods/globalMbox',
        'description': 'Standard VEC compatible method of creating tests',
        'logo': 'angular.png'
      },
      {
        'title': 'globalVECDirectNav',
        'url': '#/methods/globalVECDirectNav',
        'description': 'Standard VEC compatible method of creating tests, VEC constructed via "direct nav"',
        'logo': 'angular.png'
      },
      {
        'title': 'hashChangeEvent',
        'url': '#/methods/hashChangeEvent',
        'description': 'Detect hash changes and look for corresponding offers',
        'logo': 'angular.png'
      },
      {
        'title': 'globalMboxWithOffer',
        'url': '#/methods/globalMboxWithOffer',
        'description': 'Use code along with global mbox to load a specific named offer',
        'logo': 'angular.png'
      },
      {
        'title': 'createMbox',
        'url': '#/methods/createMbox',
        'description': 'Use code to create an mbox and use the mobx to load a specific named offer',
        'logo': 'angular.png'
      },
      {
        'title': 'routeChange',
        'url': '#/methods/routeChange',
        'description': 'Monitor route change and load offer from server (how is the offer defined?  Route name?)',
        'logo': 'angular.png'
      }

    ];

    this.getTec = function() {
      return data;
    }
  }

})();
