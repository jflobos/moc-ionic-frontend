angular.module('app.models').factory('Course', function(restmod){
  return restmod.model('/courses').mix({
    lessons: { hasMany: 'Lesson'}
  });
});
