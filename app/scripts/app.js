(function() {
	function configFunct($stateProvider, $locationProvider, $urlRouterProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});
		$urlRouterProvider.when('*path', '/');
		$stateProvider
			.state("news", {
				url: "/",
				templateUrl: "templates/news.html",
				controller: "NewsCtrl"
			})
			.state("sport", {
				url: "/sport",
				templateUrl: "templates/sport.html",
				controller: "SportCtrl"
			})
			.state("entertainment", {
				url: "/entertainment",
				templateUrl: "templates/ent.html",
				controller: "EntCtrl"
			});
	}
	
	angular
  	.module("app", ["ui.router"])
    .config(configFunct);
})();