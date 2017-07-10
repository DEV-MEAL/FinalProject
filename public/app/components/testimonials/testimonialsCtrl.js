




angular.module("myApp")

.controller("TestimonialsController", function ($scope, $http,$timeout) {
    
     angular.element(document).ready(function () {
        
    $('.btn-vertical-slider').on('click', function () {
        
        if ($(this).attr('data-slide') == 'next') {
            $('#myCarousel').carousel('next');
        }
        if ($(this).attr('data-slide') == 'prev') {
            $('#myCarousel').carousel('prev')
        }

    });
      
    });
    
});
    