;(function(app){
	app.controller('productsCtrl', ['$scope', 'utility', function(scope, utility){
		console.log('productsCtrl controller');

		scope.AllProducts = [];

		utility.getData('json/products.json').then(function(response){
			if(response.data && response.data.list){
				scope.AllProducts = response.data.list;
			}
		});
	}]);
})(angular.module('swimming'));