  angular
    .module('testingpod')
    .controller('RouteChangeController', ['$scope', '$location', 'offerData', function($scope, $location, offerData) {

        //TPOD_DEMO_routeChangeResolve_PleaseKeepDuringBeta
        //To demonstrate use of route change resolver with getOffer with a 'named' offer
      angular.element('#method-mboxRouteChange').empty().append(offerData[0].content);

  }
]);
