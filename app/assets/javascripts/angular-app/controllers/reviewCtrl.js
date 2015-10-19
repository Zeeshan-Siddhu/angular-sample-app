(function(){
  angular.module('store').controller('reviewController', function () {
      this.review = {};

      this.addReview = function(product){
        product.reviews.push(this.review);
        this.review= {};

      };

    });
})();