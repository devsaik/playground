(function() {
  'use strict';

  angular
    .module('testingpod')
    .controller('CreateMboxController', CreateMboxController);

  /** @ngInject */
  function CreateMboxController() {
    //var vm = this;

    activate();

    function activate() {
       mboxCreate('mboxCreateExample');
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
