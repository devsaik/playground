
  angular
    .module('testingpod')
    .factory('adobeTargetOfferService', ['$q', function($q) {

    var factory = {
      data : null,
      getOffer : function(){
        var defer = $q.defer();
        adobe.target.getOffer({  //Looks like this is trying to load an offer "for" an mbox?
          mbox: 'mboxRouteChange',
          //params: {"test": "bublik", "param2": "val2"},
          success: function(response) {
            if(console&&console.info)console.info('in adobeTargetOfferService SUCCESS')
            factory.data = response;
            console.info(factory.data)
            defer.resolve(response);
          },
          error: function(status,error) {
            if(console&&console.info)console.info('in adobeTargetOfferService ERROR')
            defer.reject(error);
          }
        });
        return defer.promise;
      }
    };
    return factory;
  }]);
