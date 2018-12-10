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

    $urlRouterProvider.otherwise('registration'); //Default View
    $qProvider.errorOnUnhandledRejections(false);

});

