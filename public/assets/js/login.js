var app = angular.module("myApp");

app.controller("LoginController", ["$scope", "$location", "UserService", function($scope, $location, UserService) {
    
    $scope.login = function (user) {
        UserService.login(user).then(function (response) {
            $location.path("/login");
        }, function (response) {
            alert(response.data.message);
        });
    }
}]);






function showPassword() {
    
    var key_attr = $('#key').attr('type');
    
    if(key_attr != 'text') {
        
        $('.checkbox').addClass('show');
        $('#key').attr('type', 'text');
        
    } else {
        
        $('.checkbox').removeClass('show');
        $('#key').attr('type', 'password');
        
    }
    
}