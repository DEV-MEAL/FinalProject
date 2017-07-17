angular.module("myApp", ["ngRoute", "myApp.Auth"])


.config( function($routeProvider) {

           $routeProvider
               .when('/home', {
   controller: 'homeController',
    templateUrl: './app/components/home/home.html'
               
  })
        .when("/about", {
            templateUrl: "app/components/aboutUs/about.html",
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
        .when("/signup", {
            templateUrl: "app/components/signup/signup.html",
            controller: "SignupController"
        })
        .when("/login", {
            templateUrl: "app/components/login/login.html",
            controller: "LoginController"
        })
        .when("/logout", {
            controller: "LogoutController",
            template: ""
        })
        .otherwise({
            redirectTo: "/home"
        });
})