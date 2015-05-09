/**
 * Created by Bitusi on 03/05/2015.
 */
'use strict';

(function() {

  angular
    .module('presentationApp')
    .service('filesService',filesService);

  filesService.$inject = ['$resource','webapiURLValue'];

  function filesService($resource,webapiURLValue) {
    this.title = 'hello from service:' + webapiURLValue;
    this.files =  $resource(webapiURLValue);
  }

})();
