var dialogApp = angular.module('myApp');




dialogApp.controller("homeController",function($scope, $http, $timeout, $location,$route){
   
        $scope.getWebSites = function () {
  
      
        $http.get("http://localhost:8000/api/websites").then(function (response) {
            $scope.websites = response.data;
       
            console.log(response.data);
        });
    };
    
       angular.element(document).ready(function () {
            $scope.getWebSites();

      });

  
    
});

