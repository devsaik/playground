(function() {
  'use strict';

  angular
    .module('testingpod')
    .controller('HashChangeEventController', HashChangeEventController);

  //TPOD_DEMO_applyNamedOffer_PleaseKeepDuringBeta
  //To demonstrate use of getAndApplyOffer with a 'named' offer
  /*

   <h2>Get Named Offer Example Succeeded!</h2>
   <h3> What just happened</h2>
   Application code explicitly invoked getAndApplyOffer('namedOfferExample') when this page was loaded.
   The content was returned and at.js stuffed it into the div tag corresponding to the named "mbox".

   */
  /** @ngInject */
  function HashChangeEventController() {

    activate();

    function activate() {
      adobe.target.getOffer({  //Looks like this is trying to load an offer "for" an mbox?
        mbox: 'namedOfferExample',   //relates to server knowledge of this
        params: {},
        success: function(response) {
          if(console&&console.info)console.info('in GlobalMboxWithOfferController SUCCESS');
          console.info(response);
          adobe.target.applyOffer({
            selector: '.namedOfferExample', //what to replace content for (same as mbox div)
            offer: response
          });
        },
        error: function(status,error) {
          if(console&&console.info)console.info('in GlobalMboxWithOfferController ERROR');
        }
      });
    }

  }
})();
