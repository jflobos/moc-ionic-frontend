angular.module('app.models').factory('Video', function(restmod){
  return restmod.model('/videos');
})