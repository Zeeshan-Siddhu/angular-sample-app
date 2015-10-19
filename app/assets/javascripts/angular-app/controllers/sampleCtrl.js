(function(){

  angular.module('store').controller('SpicyController', ['$scope', function($scope) {
      $scope.spice = 'very';

      $scope.chiliSpicy = function() {
         console.log('hello');
          $scope.spice = 'chili';
      };

      $scope.jalapenoSpicy = function() {
          $scope.spice = 'jalapeño';
      };
  }]);
})();