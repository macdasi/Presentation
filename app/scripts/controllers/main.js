'use strict';

(function() {

  angular
    .module('presentationApp')
    .controller('MainCtrl',MainCtrl);

  MainCtrl.$inject = ['filesService'];

  function MainCtrl(filesService1) {
    var self = this;
    this.title = filesService1.title;
    this.files = null;

    FillFiles().then(function(){
      console.log(1);
    });

    function FillFiles(){
      return filesService1.files.query().$promise.then(function(data) {
        self.files = data;
        console.log(data);
        return data;
      });
    }

  }//.$inject = ['filesService'];

})();
