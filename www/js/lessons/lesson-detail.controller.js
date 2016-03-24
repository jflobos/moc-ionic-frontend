angular.module('app.controllers')

.controller('LessonDetailCtrl', function(Lesson, $stateParams){
  console.log('Hi from LessonDetailCtrl');
  var vm = this;
  vm.lesson = Lesson.$find($stateParams.lessonId);
});