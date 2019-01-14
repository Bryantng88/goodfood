var goodFood = angular.module('goodFood', [
    'ngRoute', 'menuService', 
  
  ]);

  goodFood.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'menuCtrl'
      }).
      when('/order', {
        templateUrl: 'views/order.html',
        controller: 'orderCtrl'
      }).
      // when('/blog', {  
      //   templateUrl: 'views/thing-to-do.html',
      //   controller: 'thing-to-do-ctrl'
      // }).
      // when('/Q&A', {
      //   templateUrl: 'views/plan-your-trip.html',
      //   controller: 'plan-your-trip-ctrl'
      // }).
      otherwise({
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      });
  }
]);