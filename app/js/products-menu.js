;(function(app){
	app.directive('productMenu', function(){
		return {
			restrict: 'E',
			scope: {
				productmenu: '='
			},
			templateUrl: 'products-menu.html',
			controller: 'productsMenuCtrl',
			link: function(scope){
				console.log('productMenu directive');
			}
		};
	});
})(angular.module('swimming'));