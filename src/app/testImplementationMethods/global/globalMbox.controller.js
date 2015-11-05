(function() {
  'use strict';

  angular
    .module('testingpod')
    .controller('GlobalMboxController', GlobalMboxController);

  /** @ngInject */
  function GlobalMboxController() {
    //var vm = this;

    activate();

    function activate() {
      //getWebDevTec();

    }

    //function getWebDevTec() {
    //  vm.implementationMethods = webDevTec.getTec();
    //
    //  angular.forEach(vm.implementationMethods, function(implementationMethod) {
    //    implementationMethod.rank = Math.random();
    //  });
    //}
  }
})();
