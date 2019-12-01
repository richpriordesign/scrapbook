var myApp = angular.module('myApp', [
    'ngRoute',
    'exhibitListControllers'
]);

myApp.filter('trustAsHtml', [
    '$sce',
    function($sce) {
        return function(value) {
            return $sce.trustAsHtml;
        }
    }
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  //Like an if statement, signifies what page the user has clicked on
  // when('/list', {
  //   templateUrl: 'partials/list.html', //The actual library link
  //   controller: 'ListController' //This corresponds to the ListController under controllers.js
  // }).
  when('/details/:itemId', {
  	templateUrl: 'partials/details.html',
  	controller: 'DetailsController'
  }).
  otherwise({
  	//Like an else statement, the default page
    redirectTo: '/details/0'
  });
}]);