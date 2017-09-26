(function() {
  function sportSvcFunct($http, $log) {  
    var Sport = {};
    var URL = "https://students-tm.herokuapp.com/api/v1/courses";
    var TOKEN = "Token token=MitJ68gojrz_55N3n8MKxg";

    Sport.getAllSport = function(cb) {
      $http({
        url: URL,
        method: "GET",
        headers: {
          "Authorization": TOKEN
        }
      }).then(function(resp) {
        // $log.log(resp.data.data);
        cb(resp.data.data);
      }, function(resp) {
        $log.error("ERROR occurred");
      });
    };   

    return Sport;
  }

  angular
    .module('app')
    .factory('SportSvc', ['$http', '$log', sportSvcFunct]);
})();