(function(){

    angular.module('store').controller('topicFormCtrl', ['$scope', '$routeParams', '$http', '$location', 'sharedData', 'ngDialog',function($scope, $routeParams, $http, $location, sharedData, ngDialog) {
        $scope.topic = sharedData.pop().topic;
        console.log($scope.topic.id);
        console.log($scope.topic.name);
        console.log($scope.topic.is_child);
        console.log($scope.topic.parent_value);
        console.log($scope.topic);
        $scope.auto_id = -1;
        $scope.parent_values = [
          {id:'1', shade:'dark'},
          {id:'2', shade:'light', notAnOption: true},
          {id:'3', shade:'dark'},
          {id:'4', shade:'dark', notAnOption: true},
          {id:'5', shade:'light', notAnOption: false}
        ];

        $scope.topic.parent_value = $scope.parent_values[$scope.topic.parent_value.id - 1];
      
        $scope.openMyDialog  = function(){
          ngDialog.open({ template: 'customer-completed-orders-filter.html', scope: $scope });
        }

        $scope.createOrUpdateTopic = function(){
          var topicData = $('#topic-form').serialize();
          topicData     += "&topic[parent_value]=" + $scope.topic.parent_value.id;
          console.log($scope.auto_id);

          request = $http({
              url: '/topics/' + $scope.topic.id + '.json',
              data: topicData,
              method: 'PATCH'
            });

          request.success(function(data){
            console.log(data);
            if(data.id) {
              $location.url('/topics/' + data.id).replace();
            }
            else {
            }

          });
        }

        //   request.success(function(data){
        //     if(data.success) {
        //       $location.url('/topics/' + data.id).replace();
        //     }
        //     else {
        //     }

        //   }
        // }





      }]);
    
})();