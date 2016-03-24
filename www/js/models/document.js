angular.module('app.models').factory('Document', function(restmod){
  return restmod.model('/documents');
});