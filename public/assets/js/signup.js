var app = angular.module("myApp");

app.controller("SignupController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {
    $scope.passwordMessage = "";
    
    $scope.signup = function (user) {
        console.log("hi we're in signup");
        if ($scope.user.password !== $scope.passwordConfirm) {
            $scope.passwordMessage = "Passwords do not match.";
        } else {
            UserService.signup(user).then(function (response) {
                $location.path("/login");
            }, function (response) {
                alert("There was a problem: " + response.data);
            });
        }
    }
}]);


// Get the modal
//var modal = document.getElementById('id01');
//
//window.onclick = function(event) {
//    if (event.target == modal) {
//        modal.style.display = "none";
//    }
//}
//
