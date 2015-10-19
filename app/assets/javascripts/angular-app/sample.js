(function(){
  var app = angular.module('store', ['store-products', 'ngRoute', 'angucomplete-alt', 'ngDialog']);

  app.config(['$routeProvider',function($routeProvider) {
            $routeProvider.
                when('/topics', {
                    templateUrl: "assets/topics.html",
                    controller: 'topicListCtrl'
                }).
            when('/topics/:topicId', {
              templateUrl: 'assets/topicDetails.html',
              controller: 'topicDetailsCtrl'
            }).
            when('/topics/form/:topicId', {
              templateUrl: 'assets/topicForm.html',
              controller: 'topicFormCtrl'
            })


  }]);


//   app.config(['ngDialogProvider', function (ngDialogProvider) {
//     ngDialogProvider.setDefaults({
//         className: 'ngdialog-theme-default',
//         // plain: true,
//         showClose: true,
//         closeByDocument: true,
//         closeByEscape: true
//     });
// }]);
  /* 
 * Set Default headers for ajax requests.
 * Angular httpProvider will send all requests using these headers
*/
app.config(["$httpProvider", function(provider){
  provider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  provider.defaults.headers.put["Content-Type"] = "application/x-www-form-urlencoded";
  provider.defaults.headers.patch["Content-Type"] = "application/x-www-form-urlencoded";
  provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
}]);

/*
 * Angular service to share data between different controllers
*/
app.service('sharedData', function(){
  this.data = null;

  this.push = function ( data ) {
    this.data = data;
  };
    
  this.pop = function () {
      var temp = this.data;
      this.data = null;
      return temp;
  };
});


  //working js
  // app.controller('StoreController', function(){
  //   this.products = gems;
  // });

  // var gems = [
  //   {
  //     name: 'Dodecahedron',
  //     price: 2.95,
  //     description: '. . .',
  //     canPurchase: true,
  //     soldOut: false
  //   }
  // ];  


})();