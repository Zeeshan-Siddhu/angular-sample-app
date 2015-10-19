(function(){

    angular.module('store').controller('topicListCtrl', ['$scope', '$http', function($scope, $http) {
      $scope.topics = [];
      $http.get('/topics.json').success(function(data) {
        $scope.topics = data;
      });
    }]);
    
})();