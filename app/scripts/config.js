/**
 * Created by Bitusi on 03/05/2015.
 */



(function() {
  angular
    .module('presentationApp')
    .value('webapiURLValue','http://localhost:52086/api/values')
    .config(configStart);

  function  configStart($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();


