(function() {
  'use strict';

  angular
    .module('testingpod')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
