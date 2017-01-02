// angular.module(name, [requires], [configFn])
// 	requires - names of modules that the injector server will add for this module
//		Note, the ng module is automatically added to every module.
//	If you don't specify a requires parameter, an existing module will be returned.
var firstApp = angular.module("firstApp", []);

// The controller method is a specialized function for creating the controller object.
// There are 4 specialized functions:
// - animation(name, animationFactory
// - contorller(name, controllerFactory)
// - filer(name, filterFactory)
// - directive(name, directiveFactory)
firstApp.controller("FirstController", function ($scope) {
	$scope.first = "Some";
	$scope.last = "One";
	$scope.heading = "Hello ";
	$scope.ShowMessage = function () {
		$scope.message = $scope.first + " " + $scope.last;
	};
});