
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
      $('#lunaRange')[0].style.display="";


      
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
         $('#zi').children().remove();
          for (var i = 1; i <= 29; i++){
            $('#zi').append($('<option />').val(i).html(i))
          }
    }
    else{
      if($('#luna').val()==2){
       $('#zi').children().remove();
      for (var i = 1; i <= 28; i++){
            $('#zi').append($('<option />').val(i).html(i))
          }
      }
    }
}
year();
//$('#luna')[0].style.display="none";
//$('#zi')[0].style.display="none";

// $('#an').change(function(){
//   var an = $('#an').val();
//   console.log("An cerut ",an);
//   console.log(reqObj[an]);
//   get_url(reqObj[an]);
// })

// $('#luna').change(function(){
//     $('#zi')[0].style.display="";
//     day();
// })
var todisplay =[];
$('#zi').change(function(){
    $("#show")[0].style.display="";
    $("#values").empty();
    var luna = $('#luna').val();
    console.log($("#luna").val())
    switch(luna) {
        case "1":
          console.log("ianuarie");
          var q = 0;
          var valZi = parseInt($('#zi').val())-1;
          todisplay = [];
            var elem = {}
            elem.DATCLIM = data[valZi+q].DATCLIM;
            elem.CODST = data[valZi+q].CODST;
            elem.TMAX = data[valZi+q].TMAX;
            elem.ALT = data[valZi+q].ALT;
            elem.TMED = data[valZi+q].TMED;
            elem.TMIN = data[valZi+q].TMIN;
            todisplay.push(elem);
          console.log(data[q].DATCLIM , " ",data[q].CODST, " ",  data[q].TMAX  )
            //$("#values").append("<p>"+ data[parseInt($('#zi').val())-1].DATCLIM + " "+ data[parseInt($('#zi').val())-1].CODST + " "+ data[parseInt($('#zi').val())-1].TMAX+" Grade celsius</p>");
          for(var i=1; i<23 ; i++){
            if(bisect($('#an').val())){
                q = q+366;
              }
              else{
                q = q +365;
              }
               elem = {};
               elem.DATCLIM = data[valZi+q].DATCLIM;
               elem.CODST = data[valZi+q].CODST;
               elem.TMAX = data[valZi+q].TMAX;
               elem.ALT = data[valZi+q].ALT;
               elem.TMED = data[valZi+q].TMED;
               elem.TMIN = data[valZi+q].TMIN;
               todisplay.push(elem);  
              console.log(data[q +valZi ].DATCLIM , " ",data[q +valZi].CODST, " ",  data[q+ valZi ].TMAX )
            //$("#values").append("<p>"+ data[parseInt($('#zi').val()) -1 + q].DATCLIM + " "+ data[parseInt($('#zi').val()) -1 + q].CODST +" "+ data[parseInt($('#zi').val())-1 + q].TMAX+" Grade celsius</p>");
          }
            break;
        case "2":
            var valZi = parseInt($('#zi').val()) + 30;
            var q = 0;
            console.log("februarie",data[valZi+q].DATCLIM , "   " , valZi );
            todisplay = [];
            var elem = {}
            elem.DATCLIM = data[valZi+q].DATCLIM;
               elem.CODST = data[valZi+q].CODST;
               elem.TMAX = data[valZi+q].TMAX;
               elem.ALT = data[valZi+q].ALT;
               elem.TMED = data[valZi+q].TMED;
               elem.TMIN = data[valZi+q].TMIN;
            todisplay.push(elem);
            console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX)
            $("#values").append("<p>"+ data[valZi].DATCLIM + " "+ data[valZi].CODST + " " + data[valZi].TMAX+" Grade celsius</p>");
              for(var i=1; i<23 ; i++){
              if(bisect($('#an').val())){
                q = q+366;
              }
              else{
                q = q +365;
              }
               elem = {};
               elem.DATCLIM = data[valZi+q].DATCLIM;
               elem.CODST = data[valZi+q].CODST;
               elem.TMAX = data[valZi+q].TMAX;
               elem.ALT = data[valZi+q].ALT;
               elem.TMED = data[valZi+q].TMED;
               elem.TMIN = data[valZi+q].TMIN;
               todisplay.push(elem);  

              //console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                //$("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
              }
              console.log(todisplay);
            break;
        case "3":
          console.log("martie")
          var valZi = parseInt($('#zi').val()) + 30;
            var q = 0;
            if(bisect($('#an').val())){
                q = 29;
              }
              else{
                q = 28;
              }
              todisplay = [];
            var elem = {}
            elem.DATCLIM = data[valZi+q].DATCLIM;
               elem.CODST = data[valZi+q].CODST;
               elem.TMAX = data[valZi+q].TMAX;
               elem.ALT = data[valZi+q].ALT;
               elem.TMED = data[valZi+q].TMED;
               elem.TMIN = data[valZi+q].TMIN;
            todisplay.push(elem);
                console.log("martie",q , "   " , valZi );
              console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
            $("#values").append("<p>"+ data[valZi].DATCLIM + " "+ data[valZi].CODST + " " + data[valZi].TMAX+" Grade celsius</p>");
              for(var i=1; i<23 ; i++){
              if(bisect($('#an').val())){
                q = q+366;
              }
              else{
                q = q +365;
              }
              elem = {};
               elem.DATCLIM = data[valZi+q].DATCLIM;
               elem.CODST = data[valZi+q].CODST;
               elem.TMAX = data[valZi+q].TMAX;
               elem.ALT = data[valZi+q].ALT;
               elem.TMED = data[valZi+q].TMED;
               elem.TMIN = data[valZi+q].TMIN;
               todisplay.push(elem);  
                // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
                console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
              }
            break;
        case "4":
          console.log("aprilie")
          var valZi = parseInt($('#zi').val()) + 30;
          var q = 0;
            if(bisect($('#an').val())){
                q = 60;
              }
              else{
                q = 59;
              }
            todisplay = [];
            var elem = {}
            elem.DATCLIM = data[valZi+q].DATCLIM;
               elem.CODST = data[valZi+q].CODST;
               elem.TMAX = data[valZi+q].TMAX;
               elem.ALT = data[valZi+q].ALT;
               elem.TMED = data[valZi+q].TMED;
               elem.TMIN = data[valZi+q].TMIN;
            todisplay.push(elem);
          console.log("aprilie",q , "   " , valZi );
            console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
          $("#values").append("<p>"+ data[valZi].DATCLIM + " "+ data[valZi].CODST + " " + data[valZi].TMAX+" Grade celsius</p>");
            for(var i=1; i<23 ; i++){
              if(bisect($('#an').val())){
                q = q+366;
              }
              else{
                q = q +365;
              }
                 elem = {};
               elem.DATCLIM = data[valZi+q].DATCLIM;
               elem.CODST = data[valZi+q].CODST;
               elem.TMAX = data[valZi+q].TMAX;
               elem.ALT = data[valZi+q].ALT;
               elem.TMED = data[valZi+q].TMED;
               elem.TMIN = data[valZi+q].TMIN;
               todisplay.push(elem);
                // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
                console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
            }
            break;
          case "5":
            console.log("mai")
            var valZi = parseInt($('#zi').val()) + 30;
            var q = 0;
              if(bisect($('#an').val())){
                q = 90;
              }
              else{
                q = 89;
              }
            todisplay = [];
            var elem = {}
            elem.DATCLIM = data[valZi+q].DATCLIM;
               elem.CODST = data[valZi+q].CODST;
               elem.TMAX = data[valZi+q].TMAX;
               elem.ALT = data[valZi+q].ALT;
               elem.TMED = data[valZi+q].TMED;
               elem.TMIN = data[valZi+q].TMIN;
            todisplay.push(elem);
            console.log("aprilie",q , "   " , valZi );
              console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
            $("#values").append("<p>"+ data[valZi].DATCLIM + " "+ data[valZi].CODST + " " + data[valZi].TMAX+" Grade celsius</p>");
              for(var i=1; i<23 ; i++){
              if(bisect($('#an').val())){
                  q = q+366;
                }
                else{
                  q = q +365;
                }
               elem = {};
               elem.DATCLIM = data[valZi+q].DATCLIM;
               elem.CODST = data[valZi+q].CODST;
               elem.TMAX = data[valZi+q].TMAX;
               elem.ALT = data[valZi+q].ALT;
               elem.TMED = data[valZi+q].TMED;
               elem.TMIN = data[valZi+q].TMIN;
               todisplay.push(elem);
                  // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
                  console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
              }
              break;
              case "6":
                console.log("iunie")
                var valZi = parseInt($('#zi').val()) + 30;
                var q = 0;
                  if(bisect($('#an').val())){
                    q = 121;
                  }
                  else{
                    q = 120;
                  }
                todisplay = [];
                var elem = {}
                elem.DATCLIM = data[valZi+q].DATCLIM;
               elem.CODST = data[valZi+q].CODST;
               elem.TMAX = data[valZi+q].TMAX;
               elem.ALT = data[valZi+q].ALT;
               elem.TMED = data[valZi+q].TMED;
               elem.TMIN = data[valZi+q].TMIN;
                todisplay.push(elem);
                console.log("iunie",q , "   " , valZi );
                console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                $("#values").append("<p>"+ data[valZi].DATCLIM + " "+ data[valZi].CODST + " " + data[valZi].TMAX+" Grade celsius</p>");
                  for(var i=1; i<23 ; i++){
                  if(bisect($('#an').val())){
                      q = q+366;
                    }
                    else{
                      q = q +365;
                    }
               elem = {};
               elem.DATCLIM = data[valZi+q].DATCLIM;
               elem.CODST = data[valZi+q].CODST;
               elem.TMAX = data[valZi+q].TMAX;
               elem.ALT = data[valZi+q].ALT;
               elem.TMED = data[valZi+q].TMED;
               elem.TMIN = data[valZi+q].TMIN;
               todisplay.push(elem);
                      // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
                      console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                  }
              break;
              case "7":
                console.log("iulie")
                var valZi = parseInt($('#zi').val()) + 30;
                var q = 0;
                  if(bisect($('#an').val())){
                    q = 151;
                  }
                  else{
                    q = 150;
                  }
                todisplay = [];
                var elem = {}
                elem.DATCLIM = data[valZi+q].DATCLIM;
               elem.CODST = data[valZi+q].CODST;
               elem.TMAX = data[valZi+q].TMAX;
               elem.ALT = data[valZi+q].ALT;
               elem.TMED = data[valZi+q].TMED;
               elem.TMIN = data[valZi+q].TMIN;
                todisplay.push(elem);
                console.log("iulie",q , "   " , valZi );
                console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                $("#values").append("<p>"+ data[valZi].DATCLIM + " "+ data[valZi].CODST + " " + data[valZi].TMAX+" Grade celsius</p>");
                  for(var i=1; i<23 ; i++){
                  if(bisect($('#an').val())){
                      q = q+366;
                    }
                    else{
                      q = q +365;
                    }
               elem = {};
               elem.DATCLIM = data[valZi+q].DATCLIM;
               elem.CODST = data[valZi+q].CODST;
               elem.TMAX = data[valZi+q].TMAX;
               elem.ALT = data[valZi+q].ALT;
               elem.TMED = data[valZi+q].TMED;
               elem.TMIN = data[valZi+q].TMIN;
               todisplay.push(elem);
                      // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
                      console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                  }
              break;

              case "8":
                console.log("august")
                var valZi = parseInt($('#zi').val()) + 30;
                var q = 0;
                  if(bisect($('#an').val())){
                    q = 182;
                  }
                  else{
                    q = 181;
                  }
                todisplay = [];
                var elem = {}
                elem.DATCLIM = data[valZi+q].DATCLIM;
               elem.CODST = data[valZi+q].CODST;
               elem.TMAX = data[valZi+q].TMAX;
               elem.ALT = data[valZi+q].ALT;
               elem.TMED = data[valZi+q].TMED;
               elem.TMIN = data[valZi+q].TMIN;
                todisplay.push(elem);
                console.log("august",q , "   " , valZi );
                  console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                $("#values").append("<p>"+ data[valZi].DATCLIM + " "+ data[valZi].CODST + " " + data[valZi].TMAX+" Grade celsius</p>");
                  for(var i=1; i<23 ; i++){
                  if(bisect($('#an').val())){
                      q = q+366;
                    }
                    else{
                      q = q +365;
                    }
               elem = {};
               elem.DATCLIM = data[valZi+q].DATCLIM;
               elem.CODST = data[valZi+q].CODST;
               elem.TMAX = data[valZi+q].TMAX;
               elem.ALT = data[valZi+q].ALT;
               elem.TMED = data[valZi+q].TMED;
               elem.TMIN = data[valZi+q].TMIN;
               todisplay.push(elem);
                      // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
                      console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                  }
              break;
              
              case "9":
                console.log("septembrie")
                var valZi = parseInt($('#zi').val()) + 30;
                var q = 0;
                  if(bisect($('#an').val())){
                    q = 213;
                  }
                  else{
                    q = 212;
                  }
                  todisplay = [];
                var elem = {}
                elem.DATCLIM = data[valZi+q].DATCLIM;
               elem.CODST = data[valZi+q].CODST;
               elem.TMAX = data[valZi+q].TMAX;
               elem.ALT = data[valZi+q].ALT;
               elem.TMED = data[valZi+q].TMED;
               elem.TMIN = data[valZi+q].TMIN;
                todisplay.push(elem);
                console.log("septembrie",q , "   " , valZi );
                  console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                $("#values").append("<p>"+ data[valZi].DATCLIM + " "+ data[valZi].CODST + " " + data[valZi].TMAX+" Grade celsius</p>");
                  for(var i=1; i<23 ; i++){
                  if(bisect($('#an').val())){
                      q = q+366;
                    }
                    else{
                      q = q +365;
                    }
               elem = {};
               elem.DATCLIM = data[valZi+q].DATCLIM;
               elem.CODST = data[valZi+q].CODST;
               elem.TMAX = data[valZi+q].TMAX;
               elem.ALT = data[valZi+q].ALT;
               elem.TMED = data[valZi+q].TMED;
               elem.TMIN = data[valZi+q].TMIN;
               todisplay.push(elem);
                      // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
                      console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                  }
              break;
              
              case "10":
                console.log("octombrie")
                var valZi = parseInt($('#zi').val()) + 30;
                var q = 0;
                  if(bisect($('#an').val())){
                    q = 243;
                  }
                  else{
                    q = 242;
                  }
                todisplay = [];
                var elem = {}
                elem.DATCLIM = data[valZi+q].DATCLIM;
               elem.CODST = data[valZi+q].CODST;
               elem.TMAX = data[valZi+q].TMAX;
               elem.ALT = data[valZi+q].ALT;
               elem.TMED = data[valZi+q].TMED;
               elem.TMIN = data[valZi+q].TMIN;
                todisplay.push(elem);
                console.log("octombrie",q , "   " , valZi );
                  console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                $("#values").append("<p>"+ data[valZi].DATCLIM + " "+ data[valZi].CODST + " " + data[valZi].TMAX+" Grade celsius</p>");
                  for(var i=1; i<23 ; i++){
                  if(bisect($('#an').val())){
                      q = q+366;
                    }
                    else{
                      q = q +365;
                    }
               elem = {};
               elem.DATCLIM = data[valZi+q].DATCLIM;
               elem.CODST = data[valZi+q].CODST;
               elem.TMAX = data[valZi+q].TMAX;
               elem.ALT = data[valZi+q].ALT;
               elem.TMED = data[valZi+q].TMED;
               elem.TMIN = data[valZi+q].TMIN;
               todisplay.push(elem);
                      // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
                      console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                  }
              break;

              case "11":
                console.log("noiembrie")
                var valZi = parseInt($('#zi').val()) + 30;
                var q = 0;
                  if(bisect($('#an').val())){
                    q = 274;
                  }
                  else{
                    q = 273;
                  }
                todisplay = [];
                var elem = {}
                elem.DATCLIM = data[valZi+q].DATCLIM;
               elem.CODST = data[valZi+q].CODST;
               elem.TMAX = data[valZi+q].TMAX;
               elem.ALT = data[valZi+q].ALT;
               elem.TMED = data[valZi+q].TMED;
               elem.TMIN = data[valZi+q].TMIN;
                todisplay.push(elem);
                console.log("noimebrie",q , "   " , valZi );
                  console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                $("#values").append("<p>"+ data[valZi].DATCLIM + " "+ data[valZi].CODST + " " + data[valZi].TMAX+" Grade celsius</p>");
                  for(var i=1; i<23 ; i++){
                  if(bisect($('#an').val())){
                      q = q+366;
                    }
                    else{
                      q = q +365;
                    }
               elem = {};
               elem.DATCLIM = data[valZi+q].DATCLIM;
               elem.CODST = data[valZi+q].CODST;
               elem.TMAX = data[valZi+q].TMAX;
               elem.ALT = data[valZi+q].ALT;
               elem.TMED = data[valZi+q].TMED;
               elem.TMIN = data[valZi+q].TMIN;
               todisplay.push(elem);
                      // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
                      console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                  }
              break;

              case "12":
                console.log("decembrie")
                var valZi = parseInt($('#zi').val()) + 30;
                var q = 0;
                  if(bisect($('#an').val())){
                    q = 304;
                  }
                  else{
                    q = 303;
                  }
                todisplay = [];
                var elem = {}
               elem.DATCLIM = data[valZi+q].DATCLIM;
               elem.CODST = data[valZi+q].CODST;
               elem.TMAX = data[valZi+q].TMAX;
               elem.ALT = data[valZi+q].ALT;
               elem.TMED = data[valZi+q].TMED;
               elem.TMIN = data[valZi+q].TMIN;
                todisplay.push(elem);
                console.log("decembrie",q , "   " , valZi );
                  console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                $("#values").append("<p>"+ data[valZi].DATCLIM + " "+ data[valZi].CODST + " " + data[valZi].TMAX+" Grade celsius</p>");
                  for(var i=1; i<23 ; i++){
                  if(bisect($('#an').val())){
                      q = q+366;
                    }
                    else{
                      q = q +365;
                    }
               elem = {};
               elem.DATCLIM = data[valZi+q].DATCLIM;
               elem.CODST = data[valZi+q].CODST;
               elem.TMAX = data[valZi+q].TMAX;
               elem.ALT = data[valZi+q].ALT;
               elem.TMED = data[valZi+q].TMED;
               elem.TMIN = data[valZi+q].TMIN;
               todisplay.push(elem);
                      // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
                      console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                  }
              break;
        default:
          console.log("?");
    }
})

$(function() {
       $('a')   
        .filter(function(i) {   
            return $(this).attr("title") ? $(this).attr("title"): false;
        })
        .each(function(i) { 
            //$(this).tevalZit($(this).attr("title"))
            var valZi = $(this).children()[0];
            console.log($(valZi).attr("fill","red"))
           // $(valZi).attr("stroke","red")
            $(valZi).attr("fill-opacity",1)
            $(valZi).attr("fill-stroke-opacity",1)
            $(valZi).attr("stroke-opacity", 0.3)
        });
});
var an;
 $( function() {
   $("#range_01").ionRangeSlider({
     min: 1961,
     max: 2016,
     grid: true,
     grid_num: 11,
     onFinish: function (data) {
        console.log(data);
        $("#lunaRange")[0].style.display = "none";
        $("#ziRange")[0].style.display = "none";
        get_url(reqObj[data.from]);
        lunaRange();
        an = data.from;
    }  
   });
});
 var luna;
 function lunaRange(){
    $("#range_02").ionRangeSlider({
      grid: true,
      from: 0,
      values: [
          "January", "February", "March",
          "April", "May", "June",
          "July", "August", "September",
          "October", "November", "December"
      ],
      onFinish: function (data) {
          console.log(data);
          $("#ziRange")[0].style.display = "";
          ziRange();
          luna = data.from + 1;
      } 
  });
 } 

  function ziRange(){
    $("#range_03").ionRangeSlider({
      grid: true,
      from: 0,
      values: [
          1, 2, 3,
          4, 5, 6,
          7, 8, 9,
          10, 11, 12,13,14,15,16,17,18,19,
          20,21,22,23,24,25,26,27,
          28,29,30,31],
      onFinish: function (dataa) {
        //  $("#showaction")[0].style.display = "";
        console.log("alegem zi:", dataa);
        switch(luna) {
            case 1:
              console.log("ianuarie");
              var q = 0;
              var valZi = dataa.from ;
              todisplay = [];
                var elem = {}
                elem.DATCLIM = data[valZi+q].DATCLIM;
                elem.CODST = data[valZi+q].CODST;
                elem.TMAX = data[valZi+q].TMAX;
                elem.ALT = data[valZi+q].ALT;
                elem.TMED = data[valZi+q].TMED;
                elem.TMIN = data[valZi+q].TMIN;
                todisplay.push(elem);
              console.log(data[q + valZi].DATCLIM , " ",data[q + valZi].CODST, " ",  data[q+ valZi].TMAX  )
                //$("#values").append("<p>"+ data[parseInt($('#zi').val())-1].DATCLIM + " "+ data[parseInt($('#zi').val())-1].CODST + " "+ data[parseInt($('#zi').val())-1].TMAX+" Grade celsius</p>");
              for(var i=1; i<23 ; i++){
                if(bisect(an)){
                    q = q+366;
                  }
                  else{
                    q = q +365;
                  }
                  elem = {};
                  elem.DATCLIM = data[valZi+q].DATCLIM;
                  elem.CODST = data[valZi+q].CODST;
                  elem.TMAX = data[valZi+q].TMAX;
                  elem.ALT = data[valZi+q].ALT;
                  elem.TMED = data[valZi+q].TMED;
                  elem.TMIN = data[valZi+q].TMIN;
                  todisplay.push(elem);  
                  console.log(data[q +valZi ].DATCLIM , " ",data[q +valZi].CODST, " ",  data[q+ valZi ].TMAX )
                //$("#values").append("<p>"+ data[parseInt($('#zi').val()) -1 + q].DATCLIM + " "+ data[parseInt($('#zi').val()) -1 + q].CODST +" "+ data[parseInt($('#zi').val())-1 + q].TMAX+" Grade celsius</p>");
              }
                break;
            case 2:
                var valZi = dataa.from + 31;
                var q = 0;
                console.log("februarie" );
                todisplay = [];
                var elem = {}
                elem.DATCLIM = data[valZi+q].DATCLIM;
                  elem.CODST = data[valZi+q].CODST;
                  elem.TMAX = data[valZi+q].TMAX;
                  elem.ALT = data[valZi+q].ALT;
                  elem.TMED = data[valZi+q].TMED;
                  elem.TMIN = data[valZi+q].TMIN;
                todisplay.push(elem);
                console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX)
                $("#values").append("<p>"+ data[valZi].DATCLIM + " "+ data[valZi].CODST + " " + data[valZi].TMAX+" Grade celsius</p>");
                for(var i=1; i<23 ; i++){
                  if(bisect(an)){
                    q = q+366;
                  }
                  else{
                    q = q +365;
                  }
                  elem = {};
                  elem.DATCLIM = data[valZi+q].DATCLIM;
                  elem.CODST = data[valZi+q].CODST;
                  elem.TMAX = data[valZi+q].TMAX;
                  elem.ALT = data[valZi+q].ALT;
                  elem.TMED = data[valZi+q].TMED;
                  elem.TMIN = data[valZi+q].TMIN;
                  todisplay.push(elem);  

                  console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                    //$("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
                  }
                  console.log(todisplay);
                break;
            case 3:
              console.log("martie")
              var valZi = dataa.from + 31;
                var q = 0;
                if(bisect(an)){
                    q = 29;
                  }
                  else{
                    q = 28;
                  }
                  todisplay = [];
                var elem = {}
                elem.DATCLIM = data[valZi+q].DATCLIM;
                  elem.CODST = data[valZi+q].CODST;
                  elem.TMAX = data[valZi+q].TMAX;
                  elem.ALT = data[valZi+q].ALT;
                  elem.TMED = data[valZi+q].TMED;
                  elem.TMIN = data[valZi+q].TMIN;
                todisplay.push(elem);
                    console.log("martie",q , "   " , valZi );
                  console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                $("#values").append("<p>"+ data[valZi].DATCLIM + " "+ data[valZi].CODST + " " + data[valZi].TMAX+" Grade celsius</p>");
                  for(var i=1; i<23 ; i++){
                  if((an)){
                    q = q+366;
                  }
                  else{
                    q = q +365;
                  }
                  elem = {};
                  elem.DATCLIM = data[valZi+q].DATCLIM;
                  elem.CODST = data[valZi+q].CODST;
                  elem.TMAX = data[valZi+q].TMAX;
                  elem.ALT = data[valZi+q].ALT;
                  elem.TMED = data[valZi+q].TMED;
                  elem.TMIN = data[valZi+q].TMIN;
                  todisplay.push(elem);  
                    // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
                    console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                  }
                break;
            case 4:
              console.log("aprilie")
              var valZi = dataa.from + 31;
              var q = 0;
                if(bisect(an)){
                    q = 60;
                  }
                  else{
                    q = 59;
                  }
                todisplay = [];
                var elem = {}
                elem.DATCLIM = data[valZi+q].DATCLIM;
                  elem.CODST = data[valZi+q].CODST;
                  elem.TMAX = data[valZi+q].TMAX;
                  elem.ALT = data[valZi+q].ALT;
                  elem.TMED = data[valZi+q].TMED;
                  elem.TMIN = data[valZi+q].TMIN;
                todisplay.push(elem);
              console.log("aprilie",q , "   " , valZi );
                console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
              $("#values").append("<p>"+ data[valZi].DATCLIM + " "+ data[valZi].CODST + " " + data[valZi].TMAX+" Grade celsius</p>");
                for(var i=1; i<23 ; i++){
                  if(bisect(an)){
                    q = q+366;
                  }
                  else{
                    q = q +365;
                  }
                    elem = {};
                  elem.DATCLIM = data[valZi+q].DATCLIM;
                  elem.CODST = data[valZi+q].CODST;
                  elem.TMAX = data[valZi+q].TMAX;
                  elem.ALT = data[valZi+q].ALT;
                  elem.TMED = data[valZi+q].TMED;
                  elem.TMIN = data[valZi+q].TMIN;
                  todisplay.push(elem);
                    // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
                    console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                }
                break;
              case 5:
                console.log("mai")
                var valZi = dataa.from + 31;
                var q = 0;
                  if(bisect(an)){
                    q = 90;
                  }
                  else{
                    q = 89;
                  }
                todisplay = [];
                var elem = {}
                elem.DATCLIM = data[valZi+q].DATCLIM;
                  elem.CODST = data[valZi+q].CODST;
                  elem.TMAX = data[valZi+q].TMAX;
                  elem.ALT = data[valZi+q].ALT;
                  elem.TMED = data[valZi+q].TMED;
                  elem.TMIN = data[valZi+q].TMIN;
                todisplay.push(elem);
                console.log("aprilie",q , "   " , valZi );
                  console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                $("#values").append("<p>"+ data[valZi].DATCLIM + " "+ data[valZi].CODST + " " + data[valZi].TMAX+" Grade celsius</p>");
                  for(var i=1; i<23 ; i++){
                  if(bisect(an)){
                      q = q+366;
                    }
                    else{
                      q = q +365;
                    }
                  elem = {};
                  elem.DATCLIM = data[valZi+q].DATCLIM;
                  elem.CODST = data[valZi+q].CODST;
                  elem.TMAX = data[valZi+q].TMAX;
                  elem.ALT = data[valZi+q].ALT;
                  elem.TMED = data[valZi+q].TMED;
                  elem.TMIN = data[valZi+q].TMIN;
                  todisplay.push(elem);
                      // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
                      console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                  }
                  break;
                  case 6:
                    console.log("iunie")
                    var valZi = dataa.from + 31;
                    var q = 0;
                      if(bisect(an)){
                        q = 121;
                      }
                      else{
                        q = 120;
                      }
                    todisplay = [];
                    var elem = {}
                    elem.DATCLIM = data[valZi+q].DATCLIM;
                    elem.CODST = data[valZi+q].CODST;
                    elem.TMAX = data[valZi+q].TMAX;
                    elem.ALT = data[valZi+q].ALT;
                    elem.TMED = data[valZi+q].TMED;
                    elem.TMIN = data[valZi+q].TMIN;
                    todisplay.push(elem);
                    console.log("iunie",q , "   " , valZi );
                    console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                    $("#values").append("<p>"+ data[valZi].DATCLIM + " "+ data[valZi].CODST + " " + data[valZi].TMAX+" Grade celsius</p>");
                      for(var i=1; i<23 ; i++){
                      if(bisect(an)){
                          q = q+366;
                        }
                        else{
                          q = q +365;
                        }
                  elem = {};
                  elem.DATCLIM = data[valZi+q].DATCLIM;
                  elem.CODST = data[valZi+q].CODST;
                  elem.TMAX = data[valZi+q].TMAX;
                  elem.ALT = data[valZi+q].ALT;
                  elem.TMED = data[valZi+q].TMED;
                  elem.TMIN = data[valZi+q].TMIN;
                  todisplay.push(elem);
                          // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
                          console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                      }
                  break;
                  case 7:
                    console.log("iulie")
                    var valZi = dataa.from + 31;
                    var q = 0;
                      if(bisect(an)){
                        q = 151;
                      }
                      else{
                        q = 150;
                      }
                    todisplay = [];
                    var elem = {}
                    elem.DATCLIM = data[valZi+q].DATCLIM;
                  elem.CODST = data[valZi+q].CODST;
                  elem.TMAX = data[valZi+q].TMAX;
                  elem.ALT = data[valZi+q].ALT;
                  elem.TMED = data[valZi+q].TMED;
                  elem.TMIN = data[valZi+q].TMIN;
                    todisplay.push(elem);
                    console.log("iulie",q , "   " , valZi );
                    console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                    $("#values").append("<p>"+ data[valZi].DATCLIM + " "+ data[valZi].CODST + " " + data[valZi].TMAX+" Grade celsius</p>");
                      for(var i=1; i<23 ; i++){
                      if(bisect(an)){
                          q = q+366;
                        }
                        else{
                          q = q +365;
                        }
                  elem = {};
                  elem.DATCLIM = data[valZi+q].DATCLIM;
                  elem.CODST = data[valZi+q].CODST;
                  elem.TMAX = data[valZi+q].TMAX;
                  elem.ALT = data[valZi+q].ALT;
                  elem.TMED = data[valZi+q].TMED;
                  elem.TMIN = data[valZi+q].TMIN;
                  todisplay.push(elem);
                          // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
                          console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                      }
                  break;

                  case 8:
                    console.log("august")
                    var valZi = dataa.from + 31;
                    var q = 0;
                      if(bisect(an)){
                        q = 182;
                      }
                      else{
                        q = 181;
                      }
                    todisplay = [];
                    var elem = {}
                    elem.DATCLIM = data[valZi+q].DATCLIM;
                  elem.CODST = data[valZi+q].CODST;
                  elem.TMAX = data[valZi+q].TMAX;
                  elem.ALT = data[valZi+q].ALT;
                  elem.TMED = data[valZi+q].TMED;
                  elem.TMIN = data[valZi+q].TMIN;
                    todisplay.push(elem);
                    console.log("august",q , "   " , valZi );
                      console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                    $("#values").append("<p>"+ data[valZi].DATCLIM + " "+ data[valZi].CODST + " " + data[valZi].TMAX+" Grade celsius</p>");
                      for(var i=1; i<23 ; i++){
                      if(bisect(an)){
                          q = q+366;
                        }
                        else{
                          q = q +365;
                        }
                  elem = {};
                  elem.DATCLIM = data[valZi+q].DATCLIM;
                  elem.CODST = data[valZi+q].CODST;
                  elem.TMAX = data[valZi+q].TMAX;
                  elem.ALT = data[valZi+q].ALT;
                  elem.TMED = data[valZi+q].TMED;
                  elem.TMIN = data[valZi+q].TMIN;
                  todisplay.push(elem);
                          // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
                          console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                      }
                  break;
                  
                  case 9:
                    console.log("septembrie")
                    var valZi = dataa.from + 31;
                    var q = 0;
                      if(bisect(an)){
                        q = 213;
                      }
                      else{
                        q = 212;
                      }
                      todisplay = [];
                    var elem = {}
                    elem.DATCLIM = data[valZi+q].DATCLIM;
                  elem.CODST = data[valZi+q].CODST;
                  elem.TMAX = data[valZi+q].TMAX;
                  elem.ALT = data[valZi+q].ALT;
                  elem.TMED = data[valZi+q].TMED;
                  elem.TMIN = data[valZi+q].TMIN;
                    todisplay.push(elem);
                    console.log("septembrie",q , "   " , valZi );
                      console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                    $("#values").append("<p>"+ data[valZi].DATCLIM + " "+ data[valZi].CODST + " " + data[valZi].TMAX+" Grade celsius</p>");
                      for(var i=1; i<23 ; i++){
                      if(bisect(an)){
                          q = q+366;
                        }
                        else{
                          q = q +365;
                        }
                  elem = {};
                  elem.DATCLIM = data[valZi+q].DATCLIM;
                  elem.CODST = data[valZi+q].CODST;
                  elem.TMAX = data[valZi+q].TMAX;
                  elem.ALT = data[valZi+q].ALT;
                  elem.TMED = data[valZi+q].TMED;
                  elem.TMIN = data[valZi+q].TMIN;
                  todisplay.push(elem);
                          // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
                          console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                      }
                  break;
                  
                  case 10:
                    console.log("octombrie")
                    var valZi = dataa.from + 31;
                    var q = 0;
                      if(bisect(an)){
                        q = 243;
                      }
                      else{
                        q = 242;
                      }
                    todisplay = [];
                    var elem = {}
                    elem.DATCLIM = data[valZi+q].DATCLIM;
                  elem.CODST = data[valZi+q].CODST;
                  elem.TMAX = data[valZi+q].TMAX;
                  elem.ALT = data[valZi+q].ALT;
                  elem.TMED = data[valZi+q].TMED;
                  elem.TMIN = data[valZi+q].TMIN;
                    todisplay.push(elem);
                    console.log("octombrie",q , "   " , valZi );
                      console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                    $("#values").append("<p>"+ data[valZi].DATCLIM + " "+ data[valZi].CODST + " " + data[valZi].TMAX+" Grade celsius</p>");
                      for(var i=1; i<23 ; i++){
                      if(bisect(an)){
                          q = q+366;
                        }
                        else{
                          q = q +365;
                        }
                  elem = {};
                  elem.DATCLIM = data[valZi+q].DATCLIM;
                  elem.CODST = data[valZi+q].CODST;
                  elem.TMAX = data[valZi+q].TMAX;
                  elem.ALT = data[valZi+q].ALT;
                  elem.TMED = data[valZi+q].TMED;
                  elem.TMIN = data[valZi+q].TMIN;
                  todisplay.push(elem);
                          // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
                          console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                      }
                  break;

                  case 11:
                    console.log("noiembrie")
                    var valZi = dataa.from + 31;
                    var q = 0;
                      if(bisect(an)){
                        q = 274;
                      }
                      else{
                        q = 273;
                      }
                    todisplay = [];
                    var elem = {}
                    elem.DATCLIM = data[valZi+q].DATCLIM;
                  elem.CODST = data[valZi+q].CODST;
                  elem.TMAX = data[valZi+q].TMAX;
                  elem.ALT = data[valZi+q].ALT;
                  elem.TMED = data[valZi+q].TMED;
                  elem.TMIN = data[valZi+q].TMIN;
                    todisplay.push(elem);
                    console.log("noimebrie",q , "   " , valZi );
                      console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                    $("#values").append("<p>"+ data[valZi].DATCLIM + " "+ data[valZi].CODST + " " + data[valZi].TMAX+" Grade celsius</p>");
                      for(var i=1; i<23 ; i++){
                      if(bisect(an)){
                          q = q+366;
                        }
                        else{
                          q = q +365;
                        }
                  elem = {};
                  elem.DATCLIM = data[valZi+q].DATCLIM;
                  elem.CODST = data[valZi+q].CODST;
                  elem.TMAX = data[valZi+q].TMAX;
                  elem.ALT = data[valZi+q].ALT;
                  elem.TMED = data[valZi+q].TMED;
                  elem.TMIN = data[valZi+q].TMIN;
                  todisplay.push(elem);
                          // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
                          console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                      }
                  break;

                  case 12:
                    console.log("decembrie")
                    var valZi = dataa.from + 31;
                    var q = 0;
                      if(bisect(an)){
                        q = 304;
                      }
                      else{
                        q = 303;
                      }
                    todisplay = [];
                    var elem = {}
                  elem.DATCLIM = data[valZi+q].DATCLIM;
                  elem.CODST = data[valZi+q].CODST;
                  elem.TMAX = data[valZi+q].TMAX;
                  elem.ALT = data[valZi+q].ALT;
                  elem.TMED = data[valZi+q].TMED;
                  elem.TMIN = data[valZi+q].TMIN;
                    todisplay.push(elem);
                    console.log("decembrie",q , "   " , valZi );
                      console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                    $("#values").append("<p>"+ data[valZi].DATCLIM + " "+ data[valZi].CODST + " " + data[valZi].TMAX+" Grade celsius</p>");
                      for(var i=1; i<23 ; i++){
                      if(bisect(an)){
                          q = q+366;
                        }
                        else{
                          q = q +365;
                        }
                  elem = {};
                  elem.DATCLIM = data[valZi+q].DATCLIM;
                  elem.CODST = data[valZi+q].CODST;
                  elem.TMAX = data[valZi+q].TMAX;
                  elem.ALT = data[valZi+q].ALT;
                  elem.TMED = data[valZi+q].TMED;
                  elem.TMIN = data[valZi+q].TMIN;
                  todisplay.push(elem);
                          // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
                          console.log(data[valZi+q].DATCLIM , " ",data[valZi+q].CODST, " ",  data[valZi+q].TMAX )
                      }
                  break;
            default:
              console.log("?");
        }
        initMap();
      } 
  });
 } 


  
  
