var app = angular.module("myApp");

app.controller("LogoutController", function(UserService) {
    UserService.logout();
})