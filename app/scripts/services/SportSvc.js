(function() {
  function sportSvcFunct($http, $log) {
    var Sports = {};
    var URL = "https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=489100a029644ce284601e6d8f31fd61";

    Sports.getAllSports = function(cb) {
      $http({
        url: URL,
        method: "GET"
      }).then(function(resp) {
        // $log.log(resp.data.articles);
        cb(resp.data.articles);
      }, function(resp) {
        $log.error("ERROR occurred");
      });
    };

    return Sports;
  }

  angular
    .module('app')
    .factory('SportSvc', ['$http', '$log', sportSvcFunct]);
})();
