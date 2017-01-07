(function() {
	var app = angular.module("app");
	app.controller("sport5News", sport5News);

	function sport5News($scope, $http) {

		$scope.getData = function() {
			$scope.loading=true;
			var url = 'https://extraction.import.io/query/extractor/e0815c02-84ae-483b-9600-fb0a47989144?_apikey=7d1f9cd59e5f4994997dde0d9989e4828aa30376058173bc3111909384e30f44fd075a95c267570519f76406aed1eda18df61221d948a07a38e0d0b70702606f7edd0982401ff5fc234b3bf01d4855f4&url=http%3A%2F%2Fwww.sport5.co.il%2Fworld.aspx%3FFolderID%3D4439%26lang%3Dhe';
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
//ynet//https://extraction.import.io/query/extractor/366db2c8-7bcc-4d37-aa43-cad8fc874d17?_apikey=7d1f9cd59e5f4994997dde0d9989e4828aa30376058173bc3111909384e30f44fd075a95c267570519f76406aed1eda18df61221d948a07a38e0d0b70702606f7edd0982401ff5fc234b3bf01d4855f4&url=http%3A%2F%2Fwww.ynet.co.il%2Fhome%2F0%2C7340%2CL-57%2C00.html