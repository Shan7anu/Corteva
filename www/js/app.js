myCorteva = angular.module('myCorteva',['ngRoute', 'ui.router', 'ngAnimate', 'ngMaterial']);

myCorteva.config(function ($stateProvider, $urlRouterProvider, $qProvider) {
    $stateProvider
        .state('test', {
            url: '/test',
            templateUrl: 'templates/test.html',
            controller: 'testController'
        })
        .state('sidenav', {
            url: '/sidenav',
            templateUrl: 'templates/sidenav.html',
            controller: 'sidenavCtrl'
        })

        /* Registration */
        .state('registration', {
            url: '/registration',
            templateUrl: 'templates/registration.html',
            controller: 'registrationCtrl'
        })
        /* OTP */
        .state('otp', {
            url: '/otp',
            templateUrl: 'templates/generate-otp.html',
            controller: 'otpCtrl'
        })
        /* Post Registration Questionaire: Crop Type */
        .state('prqCropType', {
            url: '/prqCropType',
            templateUrl: 'templates/prq-crop-type.html',
            controller: 'prqCropTypeCtrl'
        })
        /* Post Registration Questionaire: IsCropInfectedByBPH */
        .state('prqCropInfected', {
            url: '/prqCropInfected',
            templateUrl: 'templates/prq-is-crop-infected.html',
            controller: 'prqCropInfectedCtrl'
        })
        /* Post Registration Questionaire: Acreage */
        .state('prqAcreage', {
            url: '/prqAcreage',
            templateUrl: 'templates/prq-acreage.html',
            controller: 'prqAcreageCtrl'
        })
        /* Post Registration Questionaire: Select Crop Image */
        .state('prqSelectImage', {
            url: '/prqSelectImage',
            templateUrl: 'templates/prq-select-image.html',
            controller: 'prqSelectImageCtrl'
        })

    $urlRouterProvider.otherwise('registration'); //Default View
    $qProvider.errorOnUnhandledRejections(false);

});

