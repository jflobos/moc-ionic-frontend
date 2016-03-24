(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($ionicConfigProvider, restmodProvider){// AuthConfigProvider) {

    //AuthConfigProvider.setUidHeaderName('X-User-Email');
    //AuthConfigProvider.setTokenHeaderName('X-User-Token');

    restmodProvider.rebase('RootlessAMSApi', APIPrefix, JSONHeader);

    function APIPrefix() {
      this.setUrlPrefix("http://localhost:3000/api/v1"); // Should be defined in environment file
    }

    function JSONHeader() {
      this.on('before-request', function(request) {
        request.headers = angular.extend(request.headers || {}, {
          'Accept': 'application/json'
        });
      });
    }

  }
})();