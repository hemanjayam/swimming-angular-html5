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
		.when('/account', {
			templateUrl: 'account.html',
			controller: 'accountCtrl'
		})
		.when('/products', {
			templateUrl: 'products.html',
			controller: 'productsCtrl'
		})
		.otherwise({ redirectTo: '/' });
	});
})(angular.module('swimming'));