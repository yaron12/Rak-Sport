(function() {
	angular.module("app").config(route);
	function route($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl : 'App/view/leageStatus.html'

		}).when('/teams', {
			templateUrl : 'App/view/teams.html'
			//controller : "contactUs"
			//template:"<h1>this is about page</h1>"

		}).when('/statistics', {
			templateUrl : 'App/view/statistics.html'

		}).when('/games', {
			templateUrl : 'App/view/games.html'
			
		}).otherwise({
			redirectTo : '/'
		});
}
	
	

})();

