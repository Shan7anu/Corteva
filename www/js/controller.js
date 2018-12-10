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
myCorteva.controller('registrationCtrl', ['$rootScope', '$location', '$scope', '$location', function ($rootScope, $location, $scope, $location) {
    console.log("Inside registrationCtrl");

    $scope.registration = registration;
    $scope.professionType = professionType;


    $scope.sendOTP = function () {
        console.log("sendOTP")
        $location.path('/otp');
    }
    $scope.signup = function () {
        console.log("signup")
    }

}]);
/* OTP Controller */
myCorteva.controller('otpCtrl', ['$rootScope', '$location', '$scope', '$location', function ($rootScope, $location, $scope, $location) {
    console.log("Inside otpCtrl");
    $scope.otp = otp;

    /* OTP JS */
    function getCodeBoxElement(index) {
        return document.getElementById('codeBox' + index);
      }
      function onKeyUpEvent(index, event) {
        const eventCode = event.which || event.keyCode;
        if (getCodeBoxElement(index).value.length === 1) {
          if (index !== 4) {
            getCodeBoxElement(index+ 1).focus();
          } else {
            getCodeBoxElement(index).blur();
            // Submit code
            console.log('submit code ');
          }
        }
        if (eventCode === 8 && index !== 1) {
          getCodeBoxElement(index - 1).focus();
        }
      }
      function onFocusEvent(index) {
        for (item = 1; item < index; item++) {
          const currentElement = getCodeBoxElement(item);
          if (!currentElement.value) {
              currentElement.focus();
              break;
          }
        }
      }

}]);

