;(function(app){

	app.factory('utility', ['$http', function(http){
		var methods = {
			getData: function(fileName){
				return http.get(fileName);
			},

			postData: function(location, data){
				return http.post(location);
			}
		};

		return methods;
	}]);
})(angular.module('swimming'));