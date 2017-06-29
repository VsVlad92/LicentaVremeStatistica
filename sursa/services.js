var app = angular.module('app.ServicesModule', [])

app.service('requestService', function($http) {
  var loggedIn = false; // this is private
    
  return {
    send: function send(method, url, params, callback){
       var req = {
                method : method,
                url : url
            } 
        if(params){
            req.data = params;
            }
        
        $http(req).then(function (response) {
 
                console.log("Request Response", response);
                callback(response.data);
                
            }, function (response) {
                 callback(response);
            });
        }
  };
});