(function() {
	var app = angular.module("app");
	app.controller("news", news);

	function news($scope, $http) {

		$scope.getData = function() {
			$scope.loading=true;
			var url = 'https://extraction.import.io/query/extractor/2b92e21c-12e8-46bd-a311-9144cd7f9067?_apikey=7d1f9cd59e5f4994997dde0d9989e4828aa30376058173bc3111909384e30f44fd075a95c267570519f76406aed1eda18df61221d948a07a38e0d0b70702606f7edd0982401ff5fc234b3bf01d4855f4&url=http%3A%2F%2Fwww.one.co.il%2FLeague%2FCurrent%2F1%2C1%2C0%2C0%2F%25D7%259C%25D7%2599%25D7%2592%25D7%25AA_%25D7%2595%25D7%2595%25D7%2599%25D7%25A0%25D7%25A8';
			var promise = $http.get(url);
			promise.then(success, error);
			

			function success(response) {
				//$scope.data = response.data;
				//console.log(response.data.extractorData.data["0"].group);
				$scope.data1 = response.data.extractorData.data["0"].group;
				$scope.loading=false;
				
			};

			function error(response) {
				$scope.data = response.data;
				$scope.loading=false;
			};
		};
		
	};
	 
})();

//https://extraction.import.io/query/extractor/2b92e21c-12e8-46bd-a311-9144cd7f9067?_apikey=7d1f9cd59e5f4994997dde0d9989e4828aa30376058173bc3111909384e30f44fd075a95c267570519f76406aed1eda18df61221d948a07a38e0d0b70702606f7edd0982401ff5fc234b3bf01d4855f4&url=http%3A%2F%2Fwww.one.co.il%2FLeague%2FCurrent%2F1%2C1%2C0%2C0%2F%25D7%259C%25D7%2599%25D7%2592%25D7%25AA_%25D7%2595%25D7%2595%25D7%2599%25D7%25A0%25D7%25A8
//http://www.json-generator.com/api/json/get/cmbpevlysy?indent=2