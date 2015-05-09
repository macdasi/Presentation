/**
 * Created by Bitusi on 03/05/2015.
 */
'use strict';

(function() {

  angular
    .module('presentationApp')
    .directive('myPhoto',myPhoto);

   function myPhoto(){
     return {
       template: '<b>{{f}}</b>'
     };

   }

})();
