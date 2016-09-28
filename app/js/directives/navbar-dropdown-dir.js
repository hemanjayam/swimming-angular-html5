;(function(app){
	app.directive('productMenu', function(){
		return {
			restrict: 'E',
			scope: {
				productmenu: '='
			},
			templateUrl: 'navbar-dropdown.html',
			controller: 'navbarDropdownCtrl',
			link: function(scope){
				console.log('navbar-dropdown directive');
			}
		};
	});
})(angular.module('swimming'));