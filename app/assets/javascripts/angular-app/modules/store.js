 (function(){ 
    var app1 = angular.module('store-products', []);
    app1.directive('productTitle', function(){
      return {
        restrict: 'A',
        templateUrl: 'assets/product-title.html'
      };
    });

    app1.directive('productPanels', function(){
      return {
        restrict: 'E',
        templateUrl: 'assets/product-panels.html',
        controller:function(){
          this.tab = 1;
          this.selectTab = function(selectTab){
            this.tab = selectTab;
          };
          this.isSelected = function(checkTab){
            return this.tab === checkTab;
          };
        },
        controllerAs: 'panel'
      }
    });
})();