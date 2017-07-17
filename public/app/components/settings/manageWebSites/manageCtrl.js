var dialogApp = angular.module('myApp');
var fileName;
function getFileData(myFile){
   var file = myFile.files[0];  
    fileName = file.name;
 }


dialogApp.controller("manageController",function($scope, $http, $timeout, $location,$route){
   
        $scope.getWebSites = function () {
  
      
        $http.get("http://localhost:8000/api/websites").then(function (response) {
            $scope.websites = response.data;
       
            console.log(response.data);
        });
    };
    
       angular.element(document).ready(function () {
            $scope.getWebSites();
           
                       $timeout(function(){ $('#webSitesTable').DataTable({
  "drawCallback": function( settings ) {
////        alert( 'DataTables has redrawn the table' );
   }
});}, 100);
      });
//     $scope.options = {
////        aoColumns: [{
////            "sTitle": "Surname"
////        }, {
////            "sTitle": "First Name"
////        }, {
////            "sTitle": "First Name"
////        }, {
////            "sTitle": "First Name"
////        },{
////            "sTitle": "First Name"
////        }],
////        aoColumnDefs: [{
////            "bSortable": true,
////            "aTargets": [0, 1,2,3,4]
////        }],
//        bJQueryUI: true,
//        bDestroy: true,
////      aaData: [
////          
////       ]
//    };
  $scope.openModal=function (ob){
                 $scope.selected_webSite=ob;
      
  }
  
         $scope.deleteWebSite=function(app)
    {

            $http.delete("http://localhost:8000/api/websites/" + app._id).then(function(res) {
                
 $scope.getWebSites(); 
                $('#myModalDelete').modal('hide');
//                if ($.fn.DataTable.isDataTable("#webSitesTable")) {
//                    
//  $('#webSitesTable').DataTable().clear().destroy();
//                }
                                            $timeout(function(){
                                                                $location.url("#/manageWebSites"); $route.reload();}, 800);
//
//           $('#webSitesTable').DataTable();  
               
                
                         console.log(res) ;
        });
 };
        $scope.addWeb = function(website) {
                     website.imageUrl="./uploads/" + fileName;
               website.rate=2;
                console.log(website);
                $http.post("http://localhost:8000/api/websites", website).then(function(response) {
            console.log(response.data +" post");
//                    $http.post("http://localhost:8000/upload").then(function(response){}
//                    );
                    $scope.getWebSites();
                    
//           angular.copy({}, app);
//            $scope.getAppointements();
//                       if ($.fn.DataTable.isDataTable("#AppointementTable")) {
//                           $('#AppointementTable').DataTable().clear().destroy();
//}
//           $('#AppointementTable').DataTable();  
        });
    };
           $scope.editWebSite = function (app) {
               if (fileName !="")
               app.imageUrl="./uploads/" + fileName;
               $http.put("http://localhost:8000/api/websites/" + app._id, app).then(function (res) {
                   $scope.getWebSites(); 
                        $('#myModalEdit').modal('hide');
                   $timeout(function(){ $location.url("#/manageWebSites");  $route.reload();   }, 800);
                  
                                   
                    
// $scope.$apply();
                
        });
    };
//    $scope.addData = function () {
//        $scope.counter = $scope.counter + 1;
//        $scope.options.aaData.push([$scope.counter, $scope.counter * 2]);
//    };

    $scope.counter = 0;
    
    
});


//dialogApp.directive('myTable', function () {
//    return {
//        restrict: 'E, A, C',
//        link: function (scope, element, attrs, controller) {
//            var dataTable = element.dataTable(scope.options);
//
//            scope.$watch('options.aaData', handleModelUpdates, true);
//
//            function handleModelUpdates(newData) {
//                var data = newData || null;
//                if (data) {
//                    dataTable.fnClearTable();
//                    dataTable.fnAddData(data);
//                }
//            }
//        },
//        scope: {
//            options: "="
//        }
//    };
//});

//function Ctrl($scope) {
//    $scope.options = {
//        aoColumns: [{
//            "sTitle": "Surname"
//        }, {
//            "sTitle": "First Name"
//        }],
//        aoColumnDefs: [{
//            "bSortable": false,
//            "aTargets": [0, 1]
//        }],
//        bJQueryUI: true,
//        bDestroy: true,
//        aaData: [
//            ["Webber", "Adam"]
//        ]
//    };
//
//    $scope.addData = function () {
//        $scope.counter = $scope.counter + 1;
//        $scope.options.aaData.push([$scope.counter, $scope.counter * 2]);
//    };
//
//    $scope.counter = 0;
//}