(function(){

    angular.module('store').controller('topicDetailsCtrl', ['$scope', '$routeParams', '$http', '$location', 'sharedData', function($scope, $routeParams, $http, $location, sharedData) {
      $scope.topic = [];
      console.log($location.url());
      $http.get('/topics/' + $routeParams.topicId + '.json').success(function(data) {
         $scope.topic = data;
      }); 


    $scope.editTopicDetails = function () {
      console.log('hello');
      sharedData.push({topic: $scope.topic});
      $location.url('/topics/form/' + $routeParams.topicId);
      console.log($location.url());
    }  
      

    }]);

    
})();