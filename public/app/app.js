angular.module("myApp", ["ngRoute"])


.config( function($routeProvider) {

           $routeProvider
               .when('/home', {
   controller: 'homeController',
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
           .when("/suggestions", {
            templateUrl: "app/components/suggestions/suggestions.html",
            //controller: "suggestionsController"
        })
              .when("/webview/:id", {
            templateUrl: "app/components/WebView/webview.html",
            controller: "webViewController"
        })
                .when("/manageWebSites", {
            templateUrl: "app/components/settings/manageWebSites/manageWebSites.html",
           controller: "manageController"
        })
        .otherwise({
            redirectTo: "/home"
        });
})