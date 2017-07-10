angular.module("myApp", ["ngRoute"])


.config( function($routeProvider) {

           $routeProvider
               .when('/home', {
//    controller: 'homeController',
    templateUrl: './app/components/home/home.html'
  })
        .when("/about", {
            templateUrl: "app/components/aboutUS/about.html",
//            controller: "AboutController"
        })
           .when("/contact", {
            templateUrl: "app/components/Contact/contact.html",
//            controller: "ContactController"
        })
            .when("/testimonials", {
            templateUrl: "./app/components/testimonials/testimonials.html",
         controller: "TestimonialsController"
        })
           .when("/booking", {
            templateUrl: "app/components/book/BookingNew.html",
            controller: "BookingController"
        })
        .otherwise({
            redirectTo: "/home"
        });
})