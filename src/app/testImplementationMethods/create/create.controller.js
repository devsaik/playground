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
      //TPOD_DEMO_mboxCreate_PleaseKeepDuringBeta
      //To demonstrate 'mboxCreate' function in reference app
       mboxCreate('mboxCreateExample');
    }

  }
})();
