(function() {
  function entSvcFunct($http, $log) {
    var Ents = {};
    var URL = "https://newsapi.org/v1/articles?source=entertainment-weekly&sortBy=top&apiKey=489100a029644ce284601e6d8f31fd61";

    Ents.getAllEnts = function(cb) {
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

    return Ents;
  }

  angular
    .module('app')
    .factory('EntSvc', ['$http', '$log', entSvcFunct]);
})();
