;(function(app){
	app.config(function($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: 'indexs/home.html',
			controller: 'homeCtrl'
		})
		.otherwise({ redirectTo: '/' });
	});
})(angular.module('swimming'));