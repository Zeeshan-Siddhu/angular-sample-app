(function(){
    angular.module('store').controller('ExampleController', ['$scope', function($scope) {
      $scope.list = [];
      $scope.text = 'hello';
      $scope.submit = function() {
        console.log(this.text);
        if ($scope.text) {
          $scope.list.push(this.text);
          $scope.text = '';
        }
      };
    }]);
})();