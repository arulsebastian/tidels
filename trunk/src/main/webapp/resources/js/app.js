 "use strict";

 
var ref_date ="";
 // Declare app level module which depends on filters, and services
var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap',
         'myApp.filters',
         'myApp.services',
         'myApp.directives',
         'myApp.controllers', 
         'ui.grid', 
          'ngTouch',
         'UserApp'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'resources/partials/home.html', controller: 'HomeCtrl', public: true});
  $routeProvider.when('/categories', {templateUrl: 'resources/partials/categories.html', controller: 'categoriesCtrl', public: true});
  $routeProvider.when('/course', {templateUrl: 'resources/partials/course.html', controller: 'courseCtrl', public: true});
  $routeProvider.when('/quiz', {templateUrl: 'resources/partials/quiz.html', controller: 'quizCtrl', public: true});
  $routeProvider.when('/make-question', {templateUrl: 'resources/partials/subjects/LKG/dots.html', controller: 'DotsCtrl', public: true});
  $routeProvider.when('/home', {templateUrl: 'resources/partials/home.html', controller: 'HomeCtrl', public: true});
  $routeProvider.when('/file-upload', {templateUrl: 'resources/partials/file-upload.html', controller: 'myCtrl', public: true});
  $routeProvider.when('/login', {templateUrl: 'resources/partials/login.html', login: true, controller: 'LoginCtrl'});
  $routeProvider.when('/logout', {templateUrl: 'resources/partials/logout.html'});
  $routeProvider.when('/signup', {templateUrl: 'resources/partials/signup.html', public: true});
  $routeProvider.when('/verify-email', {templateUrl: 'resources/partials/verify-email.html', verify_email: true});
  $routeProvider.when('/reset-password', {templateUrl: 'resources/partials/reset-password.html', public: true});
  $routeProvider.when('/set-password', {templateUrl: 'resources/partials/set-password.html', set_password: true});
  $routeProvider.when('/articles', {templateUrl: 'resources/partials/articles.html', controller: 'ArticlesCtrl'});
  $routeProvider.when('/subjects', {templateUrl: 'resources/partials/subjects.html', controller: 'ModalDemoCtrl'});  
  $routeProvider.when('/user-profile', {templateUrl: 'resources/partials/user_profile.html', controller: 'UserProfileCtrl'});
  $routeProvider.when('/placesvisitedsummary/:ref_date/:time_period/:display_type', {templateUrl: 'resources/partials/placesvisitedSummary.html', controller: 'PlacesvisitedSummaryCtrl'});
  $routeProvider.when('/placesvisitedsummarychart/:ref_date/:time_period/:display_type', {templateUrl: 'resources/partials/placesvisitedSummaryChart.html', controller: 'PlacesvisitedSummaryChartCtrl'});
  $routeProvider.when('/placesvisitedcalender/:ref_date/:time_period/:display_type', {templateUrl: 'resources/partials/placesvisitedCalender.html', controller: 'PlacesvisitedCalenderCtrl'});
  $routeProvider.when('/locationstimespenttoday', {templateUrl: 'resources/partials/locationstimespent.html', controller: 'LocationstimespentCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
  
}]).
run(function(user) {
  user.init({ appId: '54d4f7388ceb1' });
  });