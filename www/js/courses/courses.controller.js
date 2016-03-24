angular.module('app.controllers')

.controller('CoursesCtrl', function(Course){
  var vm = this;
  console.log("Entramos al controller de Courses");
  vm.courses = Course.$search({});
});