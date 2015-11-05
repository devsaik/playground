(function() {
  'use strict';

  angular
    .module('testingpod')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(webDevTec) {
    var vm = this;

    vm.implementationMethods = [];
    vm.classAnimation = '';
    vm.creationDate = 1444755876898;

    activate();

    function activate() {
      getWebDevTec();
    }

    function getWebDevTec() {
      vm.implementationMethods = webDevTec.getTec();

      angular.forEach(vm.implementationMethods, function(implementationMethod) {
        implementationMethod.rank = Math.random();
      });
    }
  }
})();
