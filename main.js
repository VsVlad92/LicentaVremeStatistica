
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
          url:"//query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22"+
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
    function year(){
        for (var i = new Date().getFullYear(); i > 1960; i--)
        {
            $('#an').append($('<option />').val(i).html(i));
        }
    }
    function day(){
       $('#zi').children().remove();

       if($('#luna').val()%2==0){
         for (var i = 1; i < 31; i++){
            $('#zi').append($('<option />').val(i).html(i))
         }
       }
       if($('#luna').val()%2==1){
         for (var i = 1; i <= 31; i++){
            $('#zi').append($('<option />').val(i).html(i))
         }
       }
        if($('#luna').val()==12){
         for (var i = 1; i <= 31; i++){
            $('#zi').append($('<option />').val(i).html(i))
         }
       }
          if(($('#luna').val()==2) && (bisect($('#an').val())) ){

              for (var i = 1; i <= 29; i++){
                $('#zi').append($('<option />').val(i).html(i))
              }
       }
       else{
         for (var i = 1; i <= 28; i++){
                $('#zi').append($('<option />').val(i).html(i))
              }
       }
    }
  year();
  $('#luna')[0].style.display="none";
  $('#zi')[0].style.display="none";

  $('#an').change(function(){
    var an = $('#an').val();
    console.log("An cerut ",an);
    console.log(reqObj[an]);
    get_url(reqObj[an]);
  })

  $('#luna').change(function(){
      $('#zi')[0].style.display="";
      day();
  })

  $('#zi').change(function(){
     $("#values").empty();
     var luna = $('#luna').val();
     console.log($("#luna").val())
     switch(luna) {
          case "1":
            console.log("ianuarie");
            var q = 0;
            var x = parseInt($('#zi').val())-1;
            console.log(data[q].DATCLIM , " ",data[q].CODST, " ",  data[q].TMAX )
             //$("#values").append("<p>"+ data[parseInt($('#zi').val())-1].DATCLIM + " "+ data[parseInt($('#zi').val())-1].CODST + " "+ data[parseInt($('#zi').val())-1].TMAX+" Grade celsius</p>");
            for(var i=1; i<23 ; i++){
              if(bisect($('#an').val())){
                  q = q+366;
                }
                else{
                  q = q +365;
                }
                console.log(data[q +x ].DATCLIM , " ",data[q +x].CODST, " ",  data[q+ x ].TMAX )
              //$("#values").append("<p>"+ data[parseInt($('#zi').val()) -1 + q].DATCLIM + " "+ data[parseInt($('#zi').val()) -1 + q].CODST +" "+ data[parseInt($('#zi').val())-1 + q].TMAX+" Grade celsius</p>");
            }
              break;
          case "2":
             var x = parseInt($('#zi').val()) + 30;
             var q = 0;
             console.log("februarie",q , "   " , x );
             console.log(data[x+q].DATCLIM , " ",data[x+q].CODST, " ",  data[x+q].TMAX )
             //$("#values").append("<p>"+ data[x].DATCLIM + " "+ data[x].CODST + " " + data[x].TMAX+" Grade celsius</p>");
               for(var i=1; i<23 ; i++){
                if(bisect($('#an').val())){
                  q = q+366;
                }
                else{
                  q = q +365;
                }
                console.log(data[x+q].DATCLIM , " ",data[x+q].CODST, " ",  data[x+q].TMAX )
                  //$("#values").append("<p>"+ data[x+q].DATCLIM + " "+ data[x+q].CODST + " "+ data[x+q].TMAX+" Grade celsius</p>");
               }
              break;
          case "3":
            console.log("martie")
            var x = parseInt($('#zi').val()) + 30;
             var q = 0;
              if(bisect($('#an').val())){
                  q = 29;
                }
                else{
                  q = 28;
                }
                 console.log("martie",q , "   " , x );
               console.log(data[x+q].DATCLIM , " ",data[x+q].CODST, " ",  data[x+q].TMAX )
             $("#values").append("<p>"+ data[x].DATCLIM + " "+ data[x].CODST + " " + data[x].TMAX+" Grade celsius</p>");
               for(var i=1; i<23 ; i++){
               if(bisect($('#an').val())){
                  q = q+366;
                }
                else{
                  q = q +365;
                }
                  // $("#values").append("<p>"+ data[x+q].DATCLIM + " "+ data[x+q].CODST + " "+ data[x+q].TMAX+" Grade celsius</p>");
                  console.log(data[x+q].DATCLIM , " ",data[x+q].CODST, " ",  data[x+q].TMAX )
               }
              break;
          case "4":
            console.log("aprilie")
            var x = parseInt($('#zi').val()) + 30;
            var q = 0;
             if(bisect($('#an').val())){
                  q = 60;
                }
                else{
                  q = 59;
                }
            console.log("aprilie",q , "   " , x );
              console.log(data[x+q].DATCLIM , " ",data[x+q].CODST, " ",  data[x+q].TMAX )
            $("#values").append("<p>"+ data[x].DATCLIM + " "+ data[x].CODST + " " + data[x].TMAX+" Grade celsius</p>");
              for(var i=1; i<23 ; i++){
               if(bisect($('#an').val())){
                  q = q+366;
                }
                else{
                  q = q +365;
                }
                  // $("#values").append("<p>"+ data[x+q].DATCLIM + " "+ data[x+q].CODST + " "+ data[x+q].TMAX+" Grade celsius</p>");
                  console.log(data[x+q].DATCLIM , " ",data[x+q].CODST, " ",  data[x+q].TMAX )
              }
              break;
           case "5":
              console.log("mai")
              var x = parseInt($('#zi').val()) + 30;
              var q = 0;
                if(bisect($('#an').val())){
                  q = 90;
                }
                else{
                  q = 89;
                }
              console.log("aprilie",q , "   " , x );
                console.log(data[x+q].DATCLIM , " ",data[x+q].CODST, " ",  data[x+q].TMAX )
              $("#values").append("<p>"+ data[x].DATCLIM + " "+ data[x].CODST + " " + data[x].TMAX+" Grade celsius</p>");
                for(var i=1; i<23 ; i++){
                if(bisect($('#an').val())){
                    q = q+366;
                  }
                  else{
                    q = q +365;
                  }
                    // $("#values").append("<p>"+ data[x+q].DATCLIM + " "+ data[x+q].CODST + " "+ data[x+q].TMAX+" Grade celsius</p>");
                    console.log(data[x+q].DATCLIM , " ",data[x+q].CODST, " ",  data[x+q].TMAX )
                }
                break;
                case "6":
                  console.log("iunie")
                  var x = parseInt($('#zi').val()) + 30;
                  var q = 0;
                    if(bisect($('#an').val())){
                      q = 121;
                    }
                    else{
                      q = 120;
                    }
                  console.log("iunie",q , "   " , x );
                  console.log(data[x+q].DATCLIM , " ",data[x+q].CODST, " ",  data[x+q].TMAX )
                  $("#values").append("<p>"+ data[x].DATCLIM + " "+ data[x].CODST + " " + data[x].TMAX+" Grade celsius</p>");
                    for(var i=1; i<23 ; i++){
                    if(bisect($('#an').val())){
                        q = q+366;
                      }
                      else{
                        q = q +365;
                      }
                        // $("#values").append("<p>"+ data[x+q].DATCLIM + " "+ data[x+q].CODST + " "+ data[x+q].TMAX+" Grade celsius</p>");
                        console.log(data[x+q].DATCLIM , " ",data[x+q].CODST, " ",  data[x+q].TMAX )
                    }
                break;
                case "7":
                  console.log("iulie")
                  var x = parseInt($('#zi').val()) + 30;
                  var q = 0;
                    if(bisect($('#an').val())){
                      q = 151;
                    }
                    else{
                      q = 150;
                    }
                  console.log("iulie",q , "   " , x );
                  console.log(data[x+q].DATCLIM , " ",data[x+q].CODST, " ",  data[x+q].TMAX )
                  $("#values").append("<p>"+ data[x].DATCLIM + " "+ data[x].CODST + " " + data[x].TMAX+" Grade celsius</p>");
                    for(var i=1; i<23 ; i++){
                    if(bisect($('#an').val())){
                        q = q+366;
                      }
                      else{
                        q = q +365;
                      }
                        // $("#values").append("<p>"+ data[x+q].DATCLIM + " "+ data[x+q].CODST + " "+ data[x+q].TMAX+" Grade celsius</p>");
                        console.log(data[x+q].DATCLIM , " ",data[x+q].CODST, " ",  data[x+q].TMAX )
                    }
                break;

                case "8":
                  console.log("august")
                  var x = parseInt($('#zi').val()) + 30;
                  var q = 0;
                    if(bisect($('#an').val())){
                      q = 182;
                    }
                    else{
                      q = 181;
                    }
                  console.log("august",q , "   " , x );
                    console.log(data[x+q].DATCLIM , " ",data[x+q].CODST, " ",  data[x+q].TMAX )
                  $("#values").append("<p>"+ data[x].DATCLIM + " "+ data[x].CODST + " " + data[x].TMAX+" Grade celsius</p>");
                    for(var i=1; i<23 ; i++){
                    if(bisect($('#an').val())){
                        q = q+366;
                      }
                      else{
                        q = q +365;
                      }
                        // $("#values").append("<p>"+ data[x+q].DATCLIM + " "+ data[x+q].CODST + " "+ data[x+q].TMAX+" Grade celsius</p>");
                        console.log(data[x+q].DATCLIM , " ",data[x+q].CODST, " ",  data[x+q].TMAX )
                    }
                break;
                
                case "9":
                  console.log("septembrie")
                  var x = parseInt($('#zi').val()) + 30;
                  var q = 0;
                    if(bisect($('#an').val())){
                      q = 213;
                    }
                    else{
                      q = 212;
                    }
                  console.log("septembrie",q , "   " , x );
                    console.log(data[x+q].DATCLIM , " ",data[x+q].CODST, " ",  data[x+q].TMAX )
                  $("#values").append("<p>"+ data[x].DATCLIM + " "+ data[x].CODST + " " + data[x].TMAX+" Grade celsius</p>");
                    for(var i=1; i<23 ; i++){
                    if(bisect($('#an').val())){
                        q = q+366;
                      }
                      else{
                        q = q +365;
                      }
                        // $("#values").append("<p>"+ data[x+q].DATCLIM + " "+ data[x+q].CODST + " "+ data[x+q].TMAX+" Grade celsius</p>");
                        console.log(data[x+q].DATCLIM , " ",data[x+q].CODST, " ",  data[x+q].TMAX )
                    }
                break;
                
                case "10":
                  console.log("octombrie")
                  var x = parseInt($('#zi').val()) + 30;
                  var q = 0;
                    if(bisect($('#an').val())){
                      q = 243;
                    }
                    else{
                      q = 242;
                    }
                  console.log("octombrie",q , "   " , x );
                    console.log(data[x+q].DATCLIM , " ",data[x+q].CODST, " ",  data[x+q].TMAX )
                  $("#values").append("<p>"+ data[x].DATCLIM + " "+ data[x].CODST + " " + data[x].TMAX+" Grade celsius</p>");
                    for(var i=1; i<23 ; i++){
                    if(bisect($('#an').val())){
                        q = q+366;
                      }
                      else{
                        q = q +365;
                      }
                        // $("#values").append("<p>"+ data[x+q].DATCLIM + " "+ data[x+q].CODST + " "+ data[x+q].TMAX+" Grade celsius</p>");
                        console.log(data[x+q].DATCLIM , " ",data[x+q].CODST, " ",  data[x+q].TMAX )
                    }
                break;

                case "11":
                  console.log("noiembrie")
                  var x = parseInt($('#zi').val()) + 30;
                  var q = 0;
                    if(bisect($('#an').val())){
                      q = 274;
                    }
                    else{
                      q = 273;
                    }
                  console.log("noimebrie",q , "   " , x );
                    console.log(data[x+q].DATCLIM , " ",data[x+q].CODST, " ",  data[x+q].TMAX )
                  $("#values").append("<p>"+ data[x].DATCLIM + " "+ data[x].CODST + " " + data[x].TMAX+" Grade celsius</p>");
                    for(var i=1; i<23 ; i++){
                    if(bisect($('#an').val())){
                        q = q+366;
                      }
                      else{
                        q = q +365;
                      }
                        // $("#values").append("<p>"+ data[x+q].DATCLIM + " "+ data[x+q].CODST + " "+ data[x+q].TMAX+" Grade celsius</p>");
                        console.log(data[x+q].DATCLIM , " ",data[x+q].CODST, " ",  data[x+q].TMAX )
                    }
                break;

                case "12":
                  console.log("decembrie")
                  var x = parseInt($('#zi').val()) + 30;
                  var q = 0;
                    if(bisect($('#an').val())){
                      q = 304;
                    }
                    else{
                      q = 303;
                    }
                  console.log("decembrie",q , "   " , x );
                    console.log(data[x+q].DATCLIM , " ",data[x+q].CODST, " ",  data[x+q].TMAX )
                  $("#values").append("<p>"+ data[x].DATCLIM + " "+ data[x].CODST + " " + data[x].TMAX+" Grade celsius</p>");
                    for(var i=1; i<23 ; i++){
                    if(bisect($('#an').val())){
                        q = q+366;
                      }
                      else{
                        q = q +365;
                      }
                        // $("#values").append("<p>"+ data[x+q].DATCLIM + " "+ data[x+q].CODST + " "+ data[x+q].TMAX+" Grade celsius</p>");
                        console.log(data[x+q].DATCLIM , " ",data[x+q].CODST, " ",  data[x+q].TMAX )
                    }
                break;
          default:
            console.log("?");
      }
  })
  
  
