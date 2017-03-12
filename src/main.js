var app = angular.module("myApp", [
    'app.ServicesModule'
])

app.controller('myCtrl', function($scope, requestService) {
    $scope.tweetsContainer = false;
    $scope.error = false;
    $scope.datas =[];

    src="https://code.jquery.com/jquery-2.2.4.min.js";
    integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=";
    crossorigin="anonymous";

    var data;
        var dataNew = [];
        var datazi = [];
        var quote;
        var str_parse = function(data){
          data = data.replace(/<[/]*body[^>]*>/g,'');
          data = data.replace(/<--[\S\s]*?-->/g,'');
          data = data.replace(/[\r]+/g,'');
          data = data.replace(/<noscript[^>]*>[\S\s]*?<\/noscript>/g,'');
          data = data.replace(/<script[^>]*>[\S\s]*?<\/script>/g,'');
          data = data.replace(/<script.*\/>/,'');
          return data
        }

        get_url = function(URL){
          $.ajax({
            url:"http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22"+
            encodeURIComponent(URL)+"%22",
            dataType: "jsonp",
            type: 'get',
            success: function(r){
              //data=r.query.results.body;
              data=r.results[0];
              data = str_parse(data);
              
              data = data.split(/[\n]+/); 
              var HEADER = data[0].split(",");
              data.shift();
              data = (function(){
                var o=[]; 
                data.forEach(function(E){
                  o.push( (function(){ 
                    var _o={}; 
                    for( var i=0, s=E.split(",");i<s.length;i++ ) 
                      _o[HEADER[i]]=s[i];
                    return _o;
                  }()) );
                });
                return o;
              }());
              
            /// THE FINAL OBJECT 
              console.log(data);
              data = data;
              $('#luna')[0].style.display="";
             
            }
          }); 
        }

  $('#luna')[0].style.display="none";
  $('#zi')[0].style.display="none";

  $('#an').change(function(){
    var an = $('#an').val();
    get_url("http://data.gov.ro/dataset/f649bad3-aa57-43ba-bf9e-bd8e9edde3f4/resource/4419b08f-4b1a-45fc-b88f-822bdacbe02d/download/climrbsn"+an+".csv");
  })
  $('#luna').change(function(){
    $('#zi')[0].style.display="";
    $("#values").empty();
    if($('#luna').val()==1){
      for(var i = 0; i<31 ; i++){
        console.log("ianuarie");
        console.log(data[i]);
        $("#values").append("<p>"+ data[i].DATCLIM + " "+ data[i].TMAX +"</p>");
      }
    }
    if($('#luna').val()==2){
      for(var i = 31; i<60 ; i++){
       console.log("februarie");
       console.log(data[i]);
       $("#values").append("<p>"+ data[i].DATCLIM + " "+ data[i].TMAX +"</p>");
      }
    }
  })

  $('#zi').change(function(){
     $("#values").empty();
     var luna = $('#luna').val();
     switch(luna) {
          case "1":
            console.log("ianuarie");
            var q = 0;
             $("#values").append("<p>"+ data[parseInt($('#zi').val())-1].DATCLIM + " "+ data[parseInt($('#zi').val())-1].CODST + " "+ data[parseInt($('#zi').val())-1].TMAX+" Grade celsius</p>");
            for(var i=1; i<23 ; i++){
              q = q+366;
              $("#values").append("<p>"+ data[parseInt($('#zi').val()) -1 + q].DATCLIM + " "+ data[parseInt($('#zi').val()) -1 + q].CODST +" "+ data[parseInt($('#zi').val())-1 + q].TMAX+" Grade celsius</p>");
            }
              break;
          case "2":
            console.log("februarie")
            var x = parseInt($('#zi').val()) + 30;
             var q = 0;
             $("#values").append("<p>"+ data[x].DATCLIM + " "+ data[x].CODST + " " + data[x].TMAX+" Grade celsius</p>");
               for(var i=1; i<23 ; i++){
                  q = q+366;
                  $("#values").append("<p>"+ data[x+q].DATCLIM + " "+ data[x+q].CODST + " "+ data[x+q].TMAX+" Grade celsius</p>");
               }
              break;
          default:
            console.log("?");
      }
   //  $("#values").append("<p>"+ dataNew[$('#zi').val()].DATCLIM + " "+ dataNew[$('#zi').val()].TMAX +"</p>");
  })
  
    $scope.detailsControl = function(data){
        if(data.expanded){
            data.expanded = false;
            data.classN= "hide";
            data.classO = "";
            data.icon = "images/down.png";
        }
        else {

            data.expanded = true;
            data.icon = "images/up.png";
            data.classN = "";
            data.classO = "hide";
        }
    }

    $scope.search = function () {
        $scope.errortext = false;
        $scope.datas =[];

        if ($scope.searchName) 
            requestService.send("GET", "http://localhost:3000/person/" + $scope.searchName, "", function(response){
                
                if(response.errors){
                    $scope.tweetsContainer = false;
                    $scope.error = true;
                    $scope.errorMessage = "Invalid username";
                    return;
                }
                 $scope.datas = response;
                 $scope.datas.splice(5);
                 for( item in $scope.datas) {
                    $scope.datas[item].created_at = moment($scope.datas[item].created_at).format("MMM Do YY");
                    $scope.datas[item].icon = "images/up.png";
                    $scope.datas[item].expanded = true;
                    $scope.datas[item].classN = "";
                    $scope.datas[item].classO = "hide";
                 }

                 $scope.error = false;
                 $scope.tweetsContainer = true;
                console.log($scope.datas);
        });
    }
});
