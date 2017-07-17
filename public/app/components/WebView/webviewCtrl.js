

angular.module("myApp")

.controller("webViewController", function ($scope, $http,$timeout,$routeParams) {

          $scope.getWebSite = function () {
  
      
        $http.get("http://localhost:8000/api/websites/" + $routeParams.id).then(function (response) {
            $scope.website = response.data;
       
            console.log(response.data);
        });
    };
    
    
    
 $scope.SetRatingStar = function() {
    console.log($('.star-rating .fa'));
       
  return $('.star-rating .fa').each(function() {

    if (parseInt($('.star-rating .fa').siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
      return $(this).removeClass('fa-star-o').addClass('fa-star');
    } else {
      return $(this).removeClass('fa-star').addClass('fa-star-o');
    }
  });
};
     angular.element(document).ready(function () {
         $scope.getWebSite();
    $('.btn-vertical-slider').on('click', function () {
        
        if ($(this).attr('data-slide') == 'next') {
            $('#myCarousel').carousel('next');
        }
        if ($(this).attr('data-slide') == 'prev') {
            $('#myCarousel').carousel('prev')
        }

    })
    
    
        $('.star-rating .fa').on('click', function() {
     $('.star-rating .fa').siblings('input.rating-value').val($(this).data('rating'));
  return $scope.SetRatingStar();
});
      


  $scope.SetRatingStar();

         
         
         
    });
    
   
    
});
        
    
    

    
