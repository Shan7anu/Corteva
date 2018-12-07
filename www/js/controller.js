/* Test Controller */
myCorteva.controller('testController', ['$rootScope', '$location', '$scope', function ($rootScope, $location, $scope) {
    console.log("Inside testController");
}]);
/* sidenavCtrl */
myCorteva.controller('sidenavCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
    console.log("Inside sidenavCtrl");
    $scope.toggleLeft = buildToggler('left');
    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        };
    }
}]);


/* Registration Controller */
myCorteva.controller('registrationCtrl', ['$rootScope', '$location', '$scope', function ($rootScope, $location, $scope) {
    console.log("Inside registrationCtrl");

    $scope.registration = registration;
    $scope.professionType = professionType;
}]);