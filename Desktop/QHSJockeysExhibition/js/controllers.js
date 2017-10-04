var exhibitListControllers = angular.module('exhibitListControllers', ['ngAnimate', 'ngSanitize']);

exhibitListControllers.controller('ListController', ['$scope', '$http', function($scope, $http){
  $http.get('js/data.json').success(function(data) {
    $scope.exhibits = data;
    $scope.exhibitOrder = 'name';
  });
}]);

exhibitListControllers.controller('DetailsController', ['$scope', '$http','$routeParams', '$sce', function($scope, $http, $routeParams, $sce){
  $http.get('js/data.json').success(function(data) {
    $scope.exhibits = data;
    $scope.whichItem = $routeParams.itemId; //$routeParams looks at the parameters in when (). In This case it's when on details:ItemId in the app.js file. Specifies which page to route to on a click.
  
    //Slider
  	if ( $routeParams.itemId > 0 ){
  		$scope.prevItem = Number($routeParams.itemId)-1; //Need number so it doesn't become string
  	}else{
  		$scope.prevItem = $scope.exhibits.length-1;
  	}

  	if ( $routeParams.itemId < $scope.exhibits.length-1 ){
  		$scope.nextItem = Number($routeParams.itemId)+1;
  	}else{
  		$scope.nextItem = 0;
  	}

  });
}]);

// angular.module('bindHtml', ['ngSanitize'])
// .controller('BindController', ['$scope', function($scope) {
//  $scope.bindHTML = "Count Fleet was aptly <br /> named—his was Reigh Count and his mother was Quickly. He was royal and he was fast. As a two-year-old Count Fleet set the track record in the 1942 Champagne Stakes at Belmont Park and the track record in the 1942 Futurity at Pimlico. As a three-year-old in 1943 Count Fleet won all his six races including the Triple Crown—Kentucky Derby, Preakness and Belmont Stakes. His victories in the Triple Crown races were by ever increasing margins—3 lengths in the Kentucky Derby, 8 lengths in the Preakness and 25 lengths in the Belmont Stakes. In the latter race he injured and ankle and a knee and never raced again. Thirty years later Secretariat won the Triple Crown and by many was immediately declared the greatest race horse of all time.  His margins of victory in the three races were 2 lengths, 4 ½ lengths and 31 lengths. In the last race the horse (Sham) who finished second to him in the Kentucky Derby and the Preakness broke his leg coming out of the gate. Like Count Fleet he never ran again.  On February 26, 10 weeks before the Kentucky Derby, Secretariat was sold to a syndicate of buyers—the Sales contract stipulated that Secretariat must be retired to Stud before December 1 and he was! An injury stopped Count Fleet—money stopped Secretariat.";
// }]);
