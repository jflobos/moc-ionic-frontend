angular.module('app.models').factory('Lesson', function(restmod){
  return restmod.model('/lessons').mix({
    videos: { hasMany: 'Video' },
    documents: { hasMany: 'Document'}
  });
})