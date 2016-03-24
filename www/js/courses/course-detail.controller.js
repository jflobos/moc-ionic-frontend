angular.module('app.controllers')

.controller('CourseDetailCtrl', function(Course, $stateParams){
  console.log("Hi from CourseDetailCtrl");
  var vm = this;
  vm.course = Course.$find($stateParams.courseId);
  vm.lessons = vm.course.lessons.$fetch();
});