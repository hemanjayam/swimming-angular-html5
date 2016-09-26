;(function(app){
	app.config(function($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: 'home.html',
			controller: 'homeCtrl'
		})
		.when('/login', {
			templateUrl: 'login.html',
			controller: 'loginCtrl'
		})
		.otherwise({ redirectTo: '/' });
	});
})(angular.module('swimming'));