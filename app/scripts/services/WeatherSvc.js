(function() {
  function weatherSvcFunct($http, $log) {  
    var Weather = {};
    var URL = "https://students-tm.herokuapp.com/api/v1/courses";
    var TOKEN = "Token token=MitJ68gojrz_55N3n8MKxg";

    Weather.getAllSport = function(cb) {
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

    return Weather;
  }

  angular
    .module('app')
    .factory('WeatherSvc', ['$http', '$log', weatherSvcFunct]);
})();