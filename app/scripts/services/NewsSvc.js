(function() {
  function newsSvcFunct($http, $log) {  
    var News = {};
    var URL = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=489100a029644ce284601e6d8f31fd61";

    News.getAllNews = function(cb) {
      $http({
        url: URL,
        method: "GET"
      }).then(function(resp) {
        $log.log(resp.data.articles);
        cb(resp.data.articles);
      }, function(resp) {
        $log.error("ERROR occurred");
      });
    };   

    return News;
  }

  angular
    .module('app')
    .factory('NewsSvc', ['$http', '$log', newsSvcFunct]);
})();