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
        'title': 'createMbox',
        'url': '#/methods/createMbox',
        'description': 'Use code to create an mbox and use the mobx to load a specific named offer',
        'logo': 'angular.png'
      }

    ];

    this.getTec = function() {
      return data;
    }
  }

})();
