(function() {
	angular.module("app").config(route);
	function route($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl : 'App/View/teams.html'
			

	/*	}).when('/statistics', {
			templateUrl : 'App/View/statistics.html'

		}).when('/games', {
			templateUrl : 'App/View/games.html'
			
		*/}).otherwise({
			redirectTo : '/'
		});
}
	
	

})();

