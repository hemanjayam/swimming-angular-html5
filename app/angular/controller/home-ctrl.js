;(function(app){
	app.controller('homeCtrl', ['$scope', "utility", function(scope, utility){
		console.log('home controller');

		scope.Alllists = [];
		
		utility.getData('json/home.json').then(function(response){
			if(response.data && response.data.list){
				scope.Alllists = response.data.list;
			}
		});
	}]);
})(angular.module('swimming'));