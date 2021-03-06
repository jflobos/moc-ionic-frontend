angular.module('app')

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'js/core/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'js/dash/dash.html',
        controller: 'DashCtrl as vm'
      }
    }
  })

  .state('tab.courses', {
    url: '/courses',
    views:{
      'tab-courses': {
        templateUrl: "js/courses/courses.html",
        controller: 'CoursesCtrl as vm'
      }
    }
  })
  .state('tab.course-detail', {
    url: '/courses/:courseId',
    views: {
      'tab-courses':{
        templateUrl: 'js/courses/course-detail.html',
        controller: 'CourseDetailCtrl as vm'
      }
    }
  })

  .state('tab.lesson', {
    url: '/lessons/:lessonId',
    view: {
      'tabs-courses': {
        templateUrl: 'js/lessons/lesson-detail.html',
        controller: 'LessonDetailCtrl as vm'
      }
    }
  })
  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'js/chats/chats.html',
          controller: 'ChatsCtrl as vm'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'js/chats/chat-detail.html',
          controller: 'ChatDetailCtrl as vm'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'js/account/account.html',
        controller: 'AccountCtrl as vm'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});