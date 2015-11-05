(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('testingpod'));

    it('should define more than 5 awesome things', inject(function($controller) {
      var vm = $controller('MainController');

      expect(angular.isArray(vm.implementationMethods)).toBeTruthy();
      expect(vm.implementationMethods.length > 5).toBeTruthy();
    }));
  });
})();
