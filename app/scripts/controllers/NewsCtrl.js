(function() {
	function newsCtrlFunct($scope, NewsSvc) {
		NewsSvc.getAllNews(function(r) {
      $scope.news = r;
    });   
	}

	angular
		.module("app")
		.controller("NewsCtrl",  ["$scope", "NewsSvc", newsCtrlFunct]);
})();