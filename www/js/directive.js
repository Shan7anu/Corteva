/*PrimaryButton Directive*/
myCorteva.directive('primaryButton', function () {
    return {
        scope: true,
        restrict: 'A',
        templateUrl: "templates/components/primary-button.html",
        link: function (scope, element, attrs) {
            scope.btnText = attrs.type;
            scope.arialabel = attrs.arialabel;
        },
    };
});
/*PrimaryButtonRectangle Directive*/
myCorteva.directive('primaryButtonRect', function () {
    return {
        scope: true,
        restrict: 'A',
        templateUrl: "templates/components/primary-button-rect.html",
        link: function (scope, element, attrs) {
            scope.btnTextRect = attrs.type;
            scope.arialabel = attrs.arialabel;
        },
    };
});

/*SecondaryButton Directive*/
myCorteva.directive('secondaryButton', function () {
    return {
        scope: true,
        restrict: 'A',
        templateUrl: "templates/components/secondary-button.html",
        link: function (scope, element, attrs) {
            scope.btnTextSec = attrs.type;
            scope.arialabel = attrs.arialabel;
        },
    };
});

/*SubmitButtonRectangle Directive*/
myCorteva.directive('submitButtonRect', function () {
    return {
        scope: true,
        restrict: 'A',
        templateUrl: "templates/components/submit-button-rect.html",
        link: function (scope, element, attrs) {
            scope.btnTextSubmit = attrs.type;
            scope.arialabel = attrs.arialabel;
        },
    };
});