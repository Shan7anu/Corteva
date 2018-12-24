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


/* Header Controller */
myCorteva.controller('headerCtrl', ['$rootScope', '$location', '$scope', '$location', function ($rootScope, $location, $scope, $location) {
    console.log("Inside headerCtrl");
    $scope.close = function () {
        console.log('close pressed');
    }
    $scope.backButton = function () {
        console.log('backButton pressed');
        history.back();
    }
}]);

/* Registration Controller */
myCorteva.controller('registrationCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    console.log("Inside registrationCtrl");
    $scope.registration = registration;
    $scope.professionType = professionType;

    $scope.uploadDP = function () {
        console.log("uploadDP");
        /* Upload Picture Logic and remove below navigation */
        $location.path('/profile');
    }
    $scope.sendOTP = function () {
        console.log("sendOTP");
        $location.path('/otp');
    }
    $scope.signup = function () {
        console.log("signup");
        $location.path('/otp');
    }

}]);
/* OTP Controller */
myCorteva.controller('otpCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    console.log("Inside otpCtrl");
    $scope.otp = otp;
    $scope.button = button;

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
      /* Navigation on Continue */
      $scope.continue = function () {
        console.log("Continue Clicked");
        $location.path('/prqCropType');
    }

}]);

/* Post Registration Questionnaire: Crop Type Controller*/
myCorteva.controller('prqCropTypeCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    console.log("Inside prqCropTypeCtrl");
    $scope.postReg = postReg;
    $scope.cropTypeOptions = cropTypeOptions;
    $scope.button = button;

    /* Navigation on Next */
    $scope.goToIsCropInfected = function () {
        console.log("Next Clicked");
        $location.path('/prqCropInfected');
    }

}]);
/* Post Registration Questionnaire: IsCropInfected Controller*/
myCorteva.controller('prqCropInfectedCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    console.log("Inside prqCropInfectedCtrl");
    $scope.postReg = postReg;
    $scope.isCropInfected = postReg.isCropInfected;
    $scope.button = button;

    /* Navigation on Next */
    $scope.goToAcreage = function () {
        console.log("Next Clicked");
        $location.path('/prqAcreage');
    }

}]);
/* Post Registration Questionnaire: Acreage Controller*/
myCorteva.controller('prqAcreageCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    console.log("Inside prqAcreageCtrl");

    $scope.acreageLabel = postReg.acreage;
    $scope.acreage = acreage;
    $scope.button = button;

    /* Navigation on Next */
    $scope.goToSelectImage = function () {
        console.log("Next Clicked");
        $location.path('/prqSelectImage');
    }

}]);
/* Post Registration Questionnaire: Select Image Controller*/
myCorteva.controller('prqSelectImageCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    console.log("Inside prqSelectImageCtrl");
    $scope.button = button;
    $scope.selectImageLabel = postReg.selectImage;
    $scope.imageSuccess = postReg.imageSuccess;
    /* Function on Select Button */
    $scope.selectImage = function () {
        console.log("Select Clicked");
        /* Write gallery/camera access functionality */
        $scope.imageAdded = true;
    }
    /* Navigation on Skip & Continue */
    $scope.goToSeedingDate = function () {
        console.log("Skip & Continue Clicked");
        $location.path('/prqSelectDate');
    }
}]);
/* Post Registration Questionnaire: Select Seeding Date Controller*/
myCorteva.controller('prqSelectDateCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    console.log("Inside prqSelectDateCtrl");
    $scope.button = button;
    $scope.selectDateLabel = postReg.selectDate;
    /* Navigation on Skip & Continue */
    $scope.submit = function () {
        console.log("Submit Clicked");
        $location.path('/retailerConnect');
    }
}]);



/* Retailer Questionnaire: Retailer Connect Controller*/
myCorteva.controller('retailerConnectCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    console.log("Inside retailerConnectCtrl");
    $scope.button = button;
    $scope.retailerQues = retailerQues;
    $scope.weeks = weeks;
    /* Navigation on Next */
    $scope.goToRetailerEstimate = function () {
        console.log("Next Clicked");
        $location.path('/retailerEstimate');
    }
}]);
/* Retailer Questionnaire: Retailer Estimate Controller*/
myCorteva.controller('retailerEstimateCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    console.log("Inside retailerEstimateCtrl");
    $scope.button = button;
    $scope.retailerQues = retailerQues;
    $scope.liquidationRange = liquidationRange;

}]);
/* Profile Controller*/
myCorteva.controller('profileCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    console.log("Inside profileCtrl");
    $scope.pagetitle = "Profile";
    $scope.profile = profile;
    $scope.userData = userData;
    $scope.navigateTo = function () {
        alert("Yet to be developed!")
    }
}]);


