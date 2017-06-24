
var data;
var dataNew = [];
var datazi = [];
var quote;
var str_parse = function (data) {
  // data = data.replace(/<[/]*body[^>]*>/g,'');
  // data = data.replace(/<--[\S\s]*?-->/g,'');
  // data = data.replace(/[\r]+/g,'');
  // data = data.replace(/<noscript[^>]*>[\S\s]*?<\/noscript>/g,'');
  // data = data.replace(/<script[^>]*>[\S\s]*?<\/script>/g,'');
  // data = data.replace(/<script.*\/>/,'');
  return data
}
function year() {
  for (var i = new Date().getFullYear(); i > 1960; i--) {
    $('#an').append($('<option />').val(i).html(i));
  }
}

// get_url = function(URL){
//   $.ajax({
//     // url:"//query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22"+
//     // encodeURIComponent(URL)+"%22",
//     url:`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20csv%20where%20url%3D'http%3A%2F%2Fdata.gov.ro%2Fdataset%2Ff649bad3-aa57-43ba-bf9e-bd8e9edde3f4%2Fresource%2F4419b08f-4b1a-45fc-b88f-822bdacbe02d%2Fdownload%2Fclimrbsn2016.csv'%0A%20%20%20%20%20%20and%20columns%3D'CODST%2CALT%2CLAT%2CLON%2CDATCLIM%2CTMAX%2CTMED%2CTMIN%2CR24'&format=json&diagnostics=true&callback=`,
//     dataType: "jsonp",
//     type: 'get',
//     success: function(r){
//       //data=r.query.results.body;
//       data=r.results[0];
//       data = str_parse(data);

//       data = data.split(/[\n]+/); 
//       var HEADER = data[0].split(",");
//       data.shift();
//       data = (function(){
//         var o=[]; 
//         data.forEach(function(E){
//           o.push( (function(){ 
//             var _o={}; 
//             for( var i=0, s=E.split(",");i<s.length;i++ ) 
//               _o[HEADER[i]]=s[i];
//             return _o;
//           }()) );
//         });
//         return o;
//       }());

//     /// THE FINAL OBJECT 

//       data = data;
//       console.log("dasdasdas",data)
//       $('#lunaRange')[0].style.display="";
//     },
//     error: function(r){
//       console.log("asdasdasdr",r);
//     }
//   }); 
// }


get_url = function (an) {
  data = bigData[an];
  //$('#lunaRange')[0].style.display = "none";
  console.log(data);
}

$(function () {
  year();
  $('a')
    .filter(function (i) {
      return $(this).attr("title") ? $(this).attr("title") : false;
    })
    .each(function (i) {
      //$(this).tevalZit($(this).attr("title"))
      var valZi = $(this).children()[0];
      console.log($(valZi).attr("fill", "red"))
      // $(valZi).attr("stroke","red")
      $(valZi).attr("fill-opacity", 1)
      $(valZi).attr("fill-stroke-opacity", 1)
      $(valZi).attr("stroke-opacity", 0.3)
    });
});
var an = 1961;
get_url(1961);
$(function () {
  $("#range_01").ionRangeSlider({
    min: 1961,
    max: 2016,
    grid: true,
    grid_num: 11,
    onFinish: function (data) {
      console.log(data);
      $("#lunaRange")[0].style.display = "";
      $("#ziRange")[0].style.display = "none";
      get_url(data.from);
      lunaRange();
      an = data.from;
    }
  });
});
var luna;
var rangeluna = 1;
var luni = [
  "January", "February", "March",
  "April", "May", "June",
  "July", "August", "September",
  "October", "November", "December"
];


function lunaRange() {
  $("#range_02").ionRangeSlider({
    grid: true,
    from: 0,
    values: luni,
    onFinish: function (data) {
      console.log(data);
      $("#ziRange")[0].style.display = "";
      $("#portlet4")[0].style.display = "";
      ziRange();
      luna = data.from + 1;
    }
  });
  rangeluna = $("#range_02").data("ionRangeSlider");
}
var rangezi;
function ziRange() {
  $("#range_03").ionRangeSlider({
    grid: true,
    from: 0,
    values: [
      1, 2, 3,
      4, 5, 6,
      7, 8, 9,
      10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      20, 21, 22, 23, 24, 25, 26, 27,
      28, 29, 30, 31],
    onFinish: function (dataa) {

      Display(dataa);
    }
  });
  rangezi = $("#range_03").data("ionRangeSlider");
}

function Display(dataa) {
  {

    console.log("alegem zi:", dataa);
    switch (luna) {
      case 1:
        console.log("ianuarie");
        var q = 0;
        var valZi = dataa.from;
        todisplay = [];
        var elem = {}
        elem.DATCLIM = data[valZi + q].DATCLIM;
        elem.CODST = data[valZi + q].CODST;
        elem.TMAX = data[valZi + q].TMAX;
        elem.ALT = data[valZi + q].ALT;
        elem.TMED = data[valZi + q].TMED;
        elem.TMIN = data[valZi + q].TMIN;
        todisplay.push(elem);
        console.log("Ianuarie", data[q + valZi].DATCLIM, " ", data[q + valZi].CODST, " ", data[q + valZi].TMAX)
        //$("#values").append("<p>"+ data[parseInt($('#zi').val())-1].DATCLIM + " "+ data[parseInt($('#zi').val())-1].CODST + " "+ data[parseInt($('#zi').val())-1].TMAX+" Grade celsius</p>");
        for (var i = 1; i < 22; i++) {
          if (bisect(an)) {
            q = q + 366;
          }
          else {
            q = q + 365;
          }
          elem = {};
          console.log(valZi + q);
          elem.DATCLIM = data[valZi + q].DATCLIM;
          elem.CODST = data[valZi + q].CODST;
          elem.TMAX = data[valZi + q].TMAX;
          elem.ALT = data[valZi + q].ALT;
          elem.TMED = data[valZi + q].TMED;
          elem.TMIN = data[valZi + q].TMIN;
          todisplay.push(elem);
          console.log("Ianuarie", data[q + valZi].DATCLIM, " ", data[q + valZi].CODST, " ", data[q + valZi].TMAX)
          //$("#values").append("<p>"+ data[parseInt($('#zi').val()) -1 + q].DATCLIM + " "+ data[parseInt($('#zi').val()) -1 + q].CODST +" "+ data[parseInt($('#zi').val())-1 + q].TMAX+" Grade celsius</p>");
        }
        break;
      case 2:
        var valZi = dataa.from + 31;
        var q = 0;
        console.log("februarie");
        todisplay = [];
        var elem = {}
        elem.DATCLIM = data[valZi + q].DATCLIM;
        elem.CODST = data[valZi + q].CODST;
        elem.TMAX = data[valZi + q].TMAX;
        elem.ALT = data[valZi + q].ALT;
        elem.TMED = data[valZi + q].TMED;
        elem.TMIN = data[valZi + q].TMIN;
        todisplay.push(elem);
        console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        $("#values").append("<p>" + data[valZi].DATCLIM + " " + data[valZi].CODST + " " + data[valZi].TMAX + " Grade celsius</p>");
        for (var i = 1; i < 22; i++) {
          if (bisect(an)) {
            q = q + 366;
          }
          else {
            q = q + 365;
          }
          elem = {};
          elem.DATCLIM = data[valZi + q].DATCLIM;
          elem.CODST = data[valZi + q].CODST;
          elem.TMAX = data[valZi + q].TMAX;
          elem.ALT = data[valZi + q].ALT;
          elem.TMED = data[valZi + q].TMED;
          elem.TMIN = data[valZi + q].TMIN;
          todisplay.push(elem);

          console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
          //$("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
        }
        console.log(todisplay);
        break;
      case 3:
        console.log("martie")
        var valZi = dataa.from + 31;
        var q = 0;
        if (bisect(an)) {
          q = 29;
        }
        else {
          q = 28;
        }
        todisplay = [];
        var elem = {}
        elem.DATCLIM = data[valZi + q].DATCLIM;
        elem.CODST = data[valZi + q].CODST;
        elem.TMAX = data[valZi + q].TMAX;
        elem.ALT = data[valZi + q].ALT;
        elem.TMED = data[valZi + q].TMED;
        elem.TMIN = data[valZi + q].TMIN;
        todisplay.push(elem);
        console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        $("#values").append("<p>" + data[valZi].DATCLIM + " " + data[valZi].CODST + " " + data[valZi].TMAX + " Grade celsius</p>");
        for (var i = 1; i < 22; i++) {
          if (bisect(an)) {
            q = q + 366;
          }
          else {
            q = q + 365;
          }
          elem = {};
          elem.DATCLIM = data[valZi + q].DATCLIM;
          elem.CODST = data[valZi + q].CODST;
          elem.TMAX = data[valZi + q].TMAX;
          elem.ALT = data[valZi + q].ALT;
          elem.TMED = data[valZi + q].TMED;
          elem.TMIN = data[valZi + q].TMIN;
          todisplay.push(elem);
          // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
          console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        }
        break;
      case 4:
        console.log("aprilie")
        var valZi = dataa.from + 31;
        var q = 0;
        if (bisect(an)) {
          q = 60;
        }
        else {
          q = 59;
        }
        todisplay = [];
        var elem = {}
        elem.DATCLIM = data[valZi + q].DATCLIM;
        elem.CODST = data[valZi + q].CODST;
        elem.TMAX = data[valZi + q].TMAX;
        elem.ALT = data[valZi + q].ALT;
        elem.TMED = data[valZi + q].TMED;
        elem.TMIN = data[valZi + q].TMIN;
        todisplay.push(elem);
        console.log("aprilie", q, "   ", valZi);
        console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        $("#values").append("<p>" + data[valZi].DATCLIM + " " + data[valZi].CODST + " " + data[valZi].TMAX + " Grade celsius</p>");
        for (var i = 1; i < 22; i++) {
          if (bisect(an)) {
            q = q + 366;
          }
          else {
            q = q + 365;
          }
          elem = {};
          elem.DATCLIM = data[valZi + q].DATCLIM;
          elem.CODST = data[valZi + q].CODST;
          elem.TMAX = data[valZi + q].TMAX;
          elem.ALT = data[valZi + q].ALT;
          elem.TMED = data[valZi + q].TMED;
          elem.TMIN = data[valZi + q].TMIN;
          todisplay.push(elem);
          // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
          console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        }
        break;
      case 5:
        console.log("mai")
        var valZi = dataa.from + 31;
        var q = 0;
        if (bisect(an)) {
          q = 90;
        }
        else {
          q = 89;
        }
        todisplay = [];
        var elem = {}
        elem.DATCLIM = data[valZi + q].DATCLIM;
        elem.CODST = data[valZi + q].CODST;
        elem.TMAX = data[valZi + q].TMAX;
        elem.ALT = data[valZi + q].ALT;
        elem.TMED = data[valZi + q].TMED;
        elem.TMIN = data[valZi + q].TMIN;
        todisplay.push(elem);
        console.log("aprilie", q, "   ", valZi);
        console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        $("#values").append("<p>" + data[valZi].DATCLIM + " " + data[valZi].CODST + " " + data[valZi].TMAX + " Grade celsius</p>");
        for (var i = 1; i < 22; i++) {
          if (bisect(an)) {
            q = q + 366;
          }
          else {
            q = q + 365;
          }
          elem = {};
          elem.DATCLIM = data[valZi + q].DATCLIM;
          elem.CODST = data[valZi + q].CODST;
          elem.TMAX = data[valZi + q].TMAX;
          elem.ALT = data[valZi + q].ALT;
          elem.TMED = data[valZi + q].TMED;
          elem.TMIN = data[valZi + q].TMIN;
          todisplay.push(elem);
          // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
          console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        }
        break;
      case 6:
        console.log("iunie")
        var valZi = dataa.from + 31;
        var q = 0;
        if (bisect(an)) {
          q = 121;
        }
        else {
          q = 120;
        }
        todisplay = [];
        var elem = {}
        elem.DATCLIM = data[valZi + q].DATCLIM;
        elem.CODST = data[valZi + q].CODST;
        elem.TMAX = data[valZi + q].TMAX;
        elem.ALT = data[valZi + q].ALT;
        elem.TMED = data[valZi + q].TMED;
        elem.TMIN = data[valZi + q].TMIN;
        todisplay.push(elem);
        console.log("iunie", q, "   ", valZi);
        console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        $("#values").append("<p>" + data[valZi].DATCLIM + " " + data[valZi].CODST + " " + data[valZi].TMAX + " Grade celsius</p>");
        for (var i = 1; i < 22; i++) {
          if (bisect(an)) {
            q = q + 366;
          }
          else {
            q = q + 365;
          }
          elem = {};
          elem.DATCLIM = data[valZi + q].DATCLIM;
          elem.CODST = data[valZi + q].CODST;
          elem.TMAX = data[valZi + q].TMAX;
          elem.ALT = data[valZi + q].ALT;
          elem.TMED = data[valZi + q].TMED;
          elem.TMIN = data[valZi + q].TMIN;
          todisplay.push(elem);
          // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
          console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        }
        break;
      case 7:
        console.log("iulie")
        var valZi = dataa.from + 31;
        var q = 0;
        if (bisect(an)) {
          q = 151;
        }
        else {
          q = 150;
        }
        todisplay = [];
        var elem = {}
        elem.DATCLIM = data[valZi + q].DATCLIM;
        elem.CODST = data[valZi + q].CODST;
        elem.TMAX = data[valZi + q].TMAX;
        elem.ALT = data[valZi + q].ALT;
        elem.TMED = data[valZi + q].TMED;
        elem.TMIN = data[valZi + q].TMIN;
        todisplay.push(elem);
        console.log("iulie", q, "   ", valZi);
        console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        $("#values").append("<p>" + data[valZi].DATCLIM + " " + data[valZi].CODST + " " + data[valZi].TMAX + " Grade celsius</p>");
        for (var i = 1; i < 22; i++) {
          if (bisect(an)) {
            q = q + 366;
          }
          else {
            q = q + 365;
          }
          elem = {};
          elem.DATCLIM = data[valZi + q].DATCLIM;
          elem.CODST = data[valZi + q].CODST;
          elem.TMAX = data[valZi + q].TMAX;
          elem.ALT = data[valZi + q].ALT;
          elem.TMED = data[valZi + q].TMED;
          elem.TMIN = data[valZi + q].TMIN;
          todisplay.push(elem);
          // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
          console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        }
        break;

      case 8:
        console.log("august")
        var valZi = dataa.from + 31;
        var q = 0;
        if (bisect(an)) {
          q = 182;
        }
        else {
          q = 181;
        }
        todisplay = [];
        var elem = {}
        elem.DATCLIM = data[valZi + q].DATCLIM;
        elem.CODST = data[valZi + q].CODST;
        elem.TMAX = data[valZi + q].TMAX;
        elem.ALT = data[valZi + q].ALT;
        elem.TMED = data[valZi + q].TMED;
        elem.TMIN = data[valZi + q].TMIN;
        todisplay.push(elem);
        console.log("august", q, "   ", valZi);
        console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        $("#values").append("<p>" + data[valZi].DATCLIM + " " + data[valZi].CODST + " " + data[valZi].TMAX + " Grade celsius</p>");
        for (var i = 1; i < 22; i++) {
          if (bisect(an)) {
            q = q + 366;
          }
          else {
            q = q + 365;
          }
          elem = {};
          elem.DATCLIM = data[valZi + q].DATCLIM;
          elem.CODST = data[valZi + q].CODST;
          elem.TMAX = data[valZi + q].TMAX;
          elem.ALT = data[valZi + q].ALT;
          elem.TMED = data[valZi + q].TMED;
          elem.TMIN = data[valZi + q].TMIN;
          todisplay.push(elem);
          // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
          console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        }
        break;

      case 9:
        console.log("septembrie")
        var valZi = dataa.from + 31;
        var q = 0;
        if (bisect(an)) {
          q = 213;
        }
        else {
          q = 212;
        }
        todisplay = [];
        var elem = {}
        elem.DATCLIM = data[valZi + q].DATCLIM;
        elem.CODST = data[valZi + q].CODST;
        elem.TMAX = data[valZi + q].TMAX;
        elem.ALT = data[valZi + q].ALT;
        elem.TMED = data[valZi + q].TMED;
        elem.TMIN = data[valZi + q].TMIN;
        todisplay.push(elem);
        console.log("septembrie", q, "   ", valZi);
        console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        $("#values").append("<p>" + data[valZi].DATCLIM + " " + data[valZi].CODST + " " + data[valZi].TMAX + " Grade celsius</p>");
        for (var i = 1; i < 22; i++) {
          if (bisect(an)) {
            q = q + 366;
          }
          else {
            q = q + 365;
          }
          elem = {};
          elem.DATCLIM = data[valZi + q].DATCLIM;
          elem.CODST = data[valZi + q].CODST;
          elem.TMAX = data[valZi + q].TMAX;
          elem.ALT = data[valZi + q].ALT;
          elem.TMED = data[valZi + q].TMED;
          elem.TMIN = data[valZi + q].TMIN;
          todisplay.push(elem);
          // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
          console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        }
        break;

      case 10:
        console.log("octombrie")
        var valZi = dataa.from + 31;
        var q = 0;
        if (bisect(an)) {
          q = 243;
        }
        else {
          q = 242;
        }
        todisplay = [];
        var elem = {}
        elem.DATCLIM = data[valZi + q].DATCLIM;
        elem.CODST = data[valZi + q].CODST;
        elem.TMAX = data[valZi + q].TMAX;
        elem.ALT = data[valZi + q].ALT;
        elem.TMED = data[valZi + q].TMED;
        elem.TMIN = data[valZi + q].TMIN;
        todisplay.push(elem);
        console.log("octombrie", q, "   ", valZi);
        console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        $("#values").append("<p>" + data[valZi].DATCLIM + " " + data[valZi].CODST + " " + data[valZi].TMAX + " Grade celsius</p>");
        for (var i = 1; i < 22; i++) {
          if (bisect(an)) {
            q = q + 366;
          }
          else {
            q = q + 365;
          }
          elem = {};
          elem.DATCLIM = data[valZi + q].DATCLIM;
          elem.CODST = data[valZi + q].CODST;
          elem.TMAX = data[valZi + q].TMAX;
          elem.ALT = data[valZi + q].ALT;
          elem.TMED = data[valZi + q].TMED;
          elem.TMIN = data[valZi + q].TMIN;
          todisplay.push(elem);
          // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
          console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        }
        break;

      case 11:
        console.log("noiembrie")
        var valZi = dataa.from + 31;
        var q = 0;
        if (bisect(an)) {
          q = 274;
        }
        else {
          q = 273;
        }
        todisplay = [];
        var elem = {}
        elem.DATCLIM = data[valZi + q].DATCLIM;
        elem.CODST = data[valZi + q].CODST;
        elem.TMAX = data[valZi + q].TMAX;
        elem.ALT = data[valZi + q].ALT;
        elem.TMED = data[valZi + q].TMED;
        elem.TMIN = data[valZi + q].TMIN;
        todisplay.push(elem);
        console.log("noimebrie", q, "   ", valZi);
        console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        $("#values").append("<p>" + data[valZi].DATCLIM + " " + data[valZi].CODST + " " + data[valZi].TMAX + " Grade celsius</p>");
        for (var i = 1; i < 22; i++) {
          if (bisect(an)) {
            q = q + 366;
          }
          else {
            q = q + 365;
          }
          elem = {};
          elem.DATCLIM = data[valZi + q].DATCLIM;
          elem.CODST = data[valZi + q].CODST;
          elem.TMAX = data[valZi + q].TMAX;
          elem.ALT = data[valZi + q].ALT;
          elem.TMED = data[valZi + q].TMED;
          elem.TMIN = data[valZi + q].TMIN;
          todisplay.push(elem);
          // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
          console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        }
        break;

      case 12:
        console.log("decembrie")
        var valZi = dataa.from + 31;
        var q = 0;
        if (bisect(an)) {
          q = 304;
        }
        else {
          q = 303;
        }
        todisplay = [];
        var elem = {}
        elem.DATCLIM = data[valZi + q].DATCLIM;
        elem.CODST = data[valZi + q].CODST;
        elem.TMAX = data[valZi + q].TMAX;
        elem.ALT = data[valZi + q].ALT;
        elem.TMED = data[valZi + q].TMED;
        elem.TMIN = data[valZi + q].TMIN;
        todisplay.push(elem);
        console.log("decembrie", q, "   ", valZi);
        console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        $("#values").append("<p>" + data[valZi].DATCLIM + " " + data[valZi].CODST + " " + data[valZi].TMAX + " Grade celsius</p>");
        for (var i = 1; i < 22; i++) {
          if (bisect(an)) {
            q = q + 366;
          }
          else {
            q = q + 365;
          }
          elem = {};
          elem.DATCLIM = data[valZi + q].DATCLIM;
          elem.CODST = data[valZi + q].CODST;
          elem.TMAX = data[valZi + q].TMAX;
          elem.ALT = data[valZi + q].ALT;
          elem.TMED = data[valZi + q].TMED;
          elem.TMIN = data[valZi + q].TMIN;
          todisplay.push(elem);
          // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
          console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        }
        break;
      default:
        console.log("?");
    }
    Clear();
    Write();
  }
}



function Display1(dataa, luna) {
  {
    luna = luna + 1;
    console.log("alegem zi:", dataa);
    switch (luna) {
      case 1:
        console.log("ianuarie");
        var q = 0;
        if (dataa.from == undefined) {
          var valZi = 1;
        } else {
          var valZi = dataa.from;
        }
        todisplay = [];
        var elem = {}
        elem.DATCLIM = data[valZi + q].DATCLIM;
        elem.CODST = data[valZi + q].CODST;
        elem.TMAX = data[valZi + q].TMAX;
        elem.ALT = data[valZi + q].ALT;
        elem.TMED = data[valZi + q].TMED;
        elem.TMIN = data[valZi + q].TMIN;
        todisplay.push(elem);
        console.log(data[q + valZi].DATCLIM, " ", data[q + valZi].CODST, " ", data[q + valZi].TMAX)
        //$("#values").append("<p>"+ data[parseInt($('#zi').val())-1].DATCLIM + " "+ data[parseInt($('#zi').val())-1].CODST + " "+ data[parseInt($('#zi').val())-1].TMAX+" Grade celsius</p>");
        for (var i = 1; i < 22; i++) {
          if (bisect(an)) {
            q = q + 366;
          }
          else {
            q = q + 365;
          }
          elem = {};
          elem.DATCLIM = data[valZi + q].DATCLIM;
          elem.CODST = data[valZi + q].CODST;
          elem.TMAX = data[valZi + q].TMAX;
          elem.ALT = data[valZi + q].ALT;
          elem.TMED = data[valZi + q].TMED;
          elem.TMIN = data[valZi + q].TMIN;
          todisplay.push(elem);
          console.log(data[q + valZi].DATCLIM, " ", data[q + valZi].CODST, " ", data[q + valZi].TMAX)
          //$("#values").append("<p>"+ data[parseInt($('#zi').val()) -1 + q].DATCLIM + " "+ data[parseInt($('#zi').val()) -1 + q].CODST +" "+ data[parseInt($('#zi').val())-1 + q].TMAX+" Grade celsius</p>");
        }
        break;
      case 2:
        var valZi = dataa.from + 31;
        var q = 0;
        console.log("februarie");
        todisplay = [];
        var elem = {}
        elem.DATCLIM = data[valZi + q].DATCLIM;
        elem.CODST = data[valZi + q].CODST;
        elem.TMAX = data[valZi + q].TMAX;
        elem.ALT = data[valZi + q].ALT;
        elem.TMED = data[valZi + q].TMED;
        elem.TMIN = data[valZi + q].TMIN;
        todisplay.push(elem);
        console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        $("#values").append("<p>" + data[valZi].DATCLIM + " " + data[valZi].CODST + " " + data[valZi].TMAX + " Grade celsius</p>");
        for (var i = 1; i < 22; i++) {
          if (bisect(an)) {
            q = q + 366;
          }
          else {
            q = q + 365;
          }
          elem = {};
          elem.DATCLIM = data[valZi + q].DATCLIM;
          elem.CODST = data[valZi + q].CODST;
          elem.TMAX = data[valZi + q].TMAX;
          elem.ALT = data[valZi + q].ALT;
          elem.TMED = data[valZi + q].TMED;
          elem.TMIN = data[valZi + q].TMIN;
          todisplay.push(elem);

          console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
          //$("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
        }
        console.log(todisplay);
        break;
      case 3:
        console.log("martie")
        var valZi = dataa.from + 31;
        var q = 0;
        if (bisect(an)) {
          q = 29;
        }
        else {
          q = 28;
        }
        todisplay = [];
        var elem = {}
        elem.DATCLIM = data[valZi + q].DATCLIM;
        elem.CODST = data[valZi + q].CODST;
        elem.TMAX = data[valZi + q].TMAX;
        elem.ALT = data[valZi + q].ALT;
        elem.TMED = data[valZi + q].TMED;
        elem.TMIN = data[valZi + q].TMIN;
        todisplay.push(elem);
        console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        $("#values").append("<p>" + data[valZi].DATCLIM + " " + data[valZi].CODST + " " + data[valZi].TMAX + " Grade celsius</p>");
        for (var i = 1; i < 22; i++) {
          if (bisect(an)) {
            q = q + 366;
          }
          else {
            q = q + 365;
          }
          elem = {};
          elem.DATCLIM = data[valZi + q].DATCLIM;
          elem.CODST = data[valZi + q].CODST;
          elem.TMAX = data[valZi + q].TMAX;
          elem.ALT = data[valZi + q].ALT;
          elem.TMED = data[valZi + q].TMED;
          elem.TMIN = data[valZi + q].TMIN;
          todisplay.push(elem);
          // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
          console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        }
        break;
      case 4:
        console.log("aprilie")
        var valZi = dataa.from + 31;
        var q = 0;
        if (bisect(an)) {
          q = 60;
        }
        else {
          q = 59;
        }
        todisplay = [];
        var elem = {}
        elem.DATCLIM = data[valZi + q].DATCLIM;
        elem.CODST = data[valZi + q].CODST;
        elem.TMAX = data[valZi + q].TMAX;
        elem.ALT = data[valZi + q].ALT;
        elem.TMED = data[valZi + q].TMED;
        elem.TMIN = data[valZi + q].TMIN;
        todisplay.push(elem);
        console.log("aprilie", q, "   ", valZi);
        console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        $("#values").append("<p>" + data[valZi].DATCLIM + " " + data[valZi].CODST + " " + data[valZi].TMAX + " Grade celsius</p>");
        for (var i = 1; i < 22; i++) {
          if (bisect(an)) {
            q = q + 366;
          }
          else {
            q = q + 365;
          }
          elem = {};
          elem.DATCLIM = data[valZi + q].DATCLIM;
          elem.CODST = data[valZi + q].CODST;
          elem.TMAX = data[valZi + q].TMAX;
          elem.ALT = data[valZi + q].ALT;
          elem.TMED = data[valZi + q].TMED;
          elem.TMIN = data[valZi + q].TMIN;
          todisplay.push(elem);
          // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
          console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        }
        break;
      case 5:
        console.log("mai")
        var valZi = dataa.from + 31;
        var q = 0;
        if (bisect(an)) {
          q = 90;
        }
        else {
          q = 89;
        }
        todisplay = [];
        var elem = {}
        elem.DATCLIM = data[valZi + q].DATCLIM;
        elem.CODST = data[valZi + q].CODST;
        elem.TMAX = data[valZi + q].TMAX;
        elem.ALT = data[valZi + q].ALT;
        elem.TMED = data[valZi + q].TMED;
        elem.TMIN = data[valZi + q].TMIN;
        todisplay.push(elem);
        console.log("aprilie", q, "   ", valZi);
        console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        $("#values").append("<p>" + data[valZi].DATCLIM + " " + data[valZi].CODST + " " + data[valZi].TMAX + " Grade celsius</p>");
        for (var i = 1; i < 22; i++) {
          if (bisect(an)) {
            q = q + 366;
          }
          else {
            q = q + 365;
          }
          elem = {};
          elem.DATCLIM = data[valZi + q].DATCLIM;
          elem.CODST = data[valZi + q].CODST;
          elem.TMAX = data[valZi + q].TMAX;
          elem.ALT = data[valZi + q].ALT;
          elem.TMED = data[valZi + q].TMED;
          elem.TMIN = data[valZi + q].TMIN;
          todisplay.push(elem);
          // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
          console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        }
        break;
      case 6:
        console.log("iunie")
        var valZi = dataa.from + 31;
        var q = 0;
        if (bisect(an)) {
          q = 121;
        }
        else {
          q = 120;
        }
        todisplay = [];
        var elem = {}
        elem.DATCLIM = data[valZi + q].DATCLIM;
        elem.CODST = data[valZi + q].CODST;
        elem.TMAX = data[valZi + q].TMAX;
        elem.ALT = data[valZi + q].ALT;
        elem.TMED = data[valZi + q].TMED;
        elem.TMIN = data[valZi + q].TMIN;
        todisplay.push(elem);
        console.log("iunie", q, "   ", valZi);
        console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        $("#values").append("<p>" + data[valZi].DATCLIM + " " + data[valZi].CODST + " " + data[valZi].TMAX + " Grade celsius</p>");
        for (var i = 1; i < 22; i++) {
          if (bisect(an)) {
            q = q + 366;
          }
          else {
            q = q + 365;
          }
          elem = {};
          elem.DATCLIM = data[valZi + q].DATCLIM;
          elem.CODST = data[valZi + q].CODST;
          elem.TMAX = data[valZi + q].TMAX;
          elem.ALT = data[valZi + q].ALT;
          elem.TMED = data[valZi + q].TMED;
          elem.TMIN = data[valZi + q].TMIN;
          todisplay.push(elem);
          // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
          console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        }
        break;
      case 7:
        console.log("iulie")
        var valZi = dataa.from + 31;
        var q = 0;
        if (bisect(an)) {
          q = 151;
        }
        else {
          q = 150;
        }
        todisplay = [];
        var elem = {}
        elem.DATCLIM = data[valZi + q].DATCLIM;
        elem.CODST = data[valZi + q].CODST;
        elem.TMAX = data[valZi + q].TMAX;
        elem.ALT = data[valZi + q].ALT;
        elem.TMED = data[valZi + q].TMED;
        elem.TMIN = data[valZi + q].TMIN;
        todisplay.push(elem);
        console.log("iulie", q, "   ", valZi);
        console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        $("#values").append("<p>" + data[valZi].DATCLIM + " " + data[valZi].CODST + " " + data[valZi].TMAX + " Grade celsius</p>");
        for (var i = 1; i < 22; i++) {
          if (bisect(an)) {
            q = q + 366;
          }
          else {
            q = q + 365;
          }
          elem = {};
          elem.DATCLIM = data[valZi + q].DATCLIM;
          elem.CODST = data[valZi + q].CODST;
          elem.TMAX = data[valZi + q].TMAX;
          elem.ALT = data[valZi + q].ALT;
          elem.TMED = data[valZi + q].TMED;
          elem.TMIN = data[valZi + q].TMIN;
          todisplay.push(elem);
          // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
          console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        }
        break;

      case 8:
        console.log("august")
        var valZi = dataa.from + 31;
        var q = 0;
        if (bisect(an)) {
          q = 182;
        }
        else {
          q = 181;
        }
        todisplay = [];
        var elem = {}
        elem.DATCLIM = data[valZi + q].DATCLIM;
        elem.CODST = data[valZi + q].CODST;
        elem.TMAX = data[valZi + q].TMAX;
        elem.ALT = data[valZi + q].ALT;
        elem.TMED = data[valZi + q].TMED;
        elem.TMIN = data[valZi + q].TMIN;
        todisplay.push(elem);
        console.log("august", q, "   ", valZi);
        console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        $("#values").append("<p>" + data[valZi].DATCLIM + " " + data[valZi].CODST + " " + data[valZi].TMAX + " Grade celsius</p>");
        for (var i = 1; i < 22; i++) {
          if (bisect(an)) {
            q = q + 366;
          }
          else {
            q = q + 365;
          }
          elem = {};
          elem.DATCLIM = data[valZi + q].DATCLIM;
          elem.CODST = data[valZi + q].CODST;
          elem.TMAX = data[valZi + q].TMAX;
          elem.ALT = data[valZi + q].ALT;
          elem.TMED = data[valZi + q].TMED;
          elem.TMIN = data[valZi + q].TMIN;
          todisplay.push(elem);
          // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
          console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        }
        break;

      case 9:
        console.log("septembrie")
        var valZi = dataa.from + 31;
        var q = 0;
        if (bisect(an)) {
          q = 213;
        }
        else {
          q = 212;
        }
        todisplay = [];
        var elem = {}
        elem.DATCLIM = data[valZi + q].DATCLIM;
        elem.CODST = data[valZi + q].CODST;
        elem.TMAX = data[valZi + q].TMAX;
        elem.ALT = data[valZi + q].ALT;
        elem.TMED = data[valZi + q].TMED;
        elem.TMIN = data[valZi + q].TMIN;
        todisplay.push(elem);
        console.log("septembrie", q, "   ", valZi);
        console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        $("#values").append("<p>" + data[valZi].DATCLIM + " " + data[valZi].CODST + " " + data[valZi].TMAX + " Grade celsius</p>");
        for (var i = 1; i < 22; i++) {
          if (bisect(an)) {
            q = q + 366;
          }
          else {
            q = q + 365;
          }
          elem = {};
          elem.DATCLIM = data[valZi + q].DATCLIM;
          elem.CODST = data[valZi + q].CODST;
          elem.TMAX = data[valZi + q].TMAX;
          elem.ALT = data[valZi + q].ALT;
          elem.TMED = data[valZi + q].TMED;
          elem.TMIN = data[valZi + q].TMIN;
          todisplay.push(elem);
          // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
          console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        }
        break;

      case 10:
        console.log("octombrie")
        var valZi = dataa.from + 31;
        var q = 0;
        if (bisect(an)) {
          q = 243;
        }
        else {
          q = 242;
        }
        todisplay = [];
        var elem = {}
        elem.DATCLIM = data[valZi + q].DATCLIM;
        elem.CODST = data[valZi + q].CODST;
        elem.TMAX = data[valZi + q].TMAX;
        elem.ALT = data[valZi + q].ALT;
        elem.TMED = data[valZi + q].TMED;
        elem.TMIN = data[valZi + q].TMIN;
        todisplay.push(elem);
        console.log("octombrie", q, "   ", valZi);
        console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        $("#values").append("<p>" + data[valZi].DATCLIM + " " + data[valZi].CODST + " " + data[valZi].TMAX + " Grade celsius</p>");
        for (var i = 1; i < 22; i++) {
          if (bisect(an)) {
            q = q + 366;
          }
          else {
            q = q + 365;
          }
          elem = {};
          elem.DATCLIM = data[valZi + q].DATCLIM;
          elem.CODST = data[valZi + q].CODST;
          elem.TMAX = data[valZi + q].TMAX;
          elem.ALT = data[valZi + q].ALT;
          elem.TMED = data[valZi + q].TMED;
          elem.TMIN = data[valZi + q].TMIN;
          todisplay.push(elem);
          // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
          console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        }
        break;

      case 11:
        console.log("noiembrie")
        var valZi = dataa.from + 31;
        var q = 0;
        if (bisect(an)) {
          q = 274;
        }
        else {
          q = 273;
        }
        todisplay = [];
        var elem = {}
        elem.DATCLIM = data[valZi + q].DATCLIM;
        elem.CODST = data[valZi + q].CODST;
        elem.TMAX = data[valZi + q].TMAX;
        elem.ALT = data[valZi + q].ALT;
        elem.TMED = data[valZi + q].TMED;
        elem.TMIN = data[valZi + q].TMIN;
        todisplay.push(elem);
        console.log("noimebrie", q, "   ", valZi);
        console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        $("#values").append("<p>" + data[valZi].DATCLIM + " " + data[valZi].CODST + " " + data[valZi].TMAX + " Grade celsius</p>");
        for (var i = 1; i < 22; i++) {
          if (bisect(an)) {
            q = q + 366;
          }
          else {
            q = q + 365;
          }
          elem = {};
          elem.DATCLIM = data[valZi + q].DATCLIM;
          elem.CODST = data[valZi + q].CODST;
          elem.TMAX = data[valZi + q].TMAX;
          elem.ALT = data[valZi + q].ALT;
          elem.TMED = data[valZi + q].TMED;
          elem.TMIN = data[valZi + q].TMIN;
          todisplay.push(elem);
          // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
          console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        }
        break;

      case 12:
        console.log("decembrie")
        var valZi = dataa.from + 31;
        var q = 0;
        if (bisect(an)) {
          q = 304;
        }
        else {
          q = 303;
        }
        todisplay = [];
        var elem = {}
        elem.DATCLIM = data[valZi + q].DATCLIM;
        elem.CODST = data[valZi + q].CODST;
        elem.TMAX = data[valZi + q].TMAX;
        elem.ALT = data[valZi + q].ALT;
        elem.TMED = data[valZi + q].TMED;
        elem.TMIN = data[valZi + q].TMIN;
        todisplay.push(elem);
        console.log("decembrie", q, "   ", valZi);
        console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        $("#values").append("<p>" + data[valZi].DATCLIM + " " + data[valZi].CODST + " " + data[valZi].TMAX + " Grade celsius</p>");
        for (var i = 1; i < 22; i++) {
          if (bisect(an)) {
            q = q + 366;
          }
          else {
            q = q + 365;
          }
          elem = {};
          elem.DATCLIM = data[valZi + q].DATCLIM;
          elem.CODST = data[valZi + q].CODST;
          elem.TMAX = data[valZi + q].TMAX;
          elem.ALT = data[valZi + q].ALT;
          elem.TMED = data[valZi + q].TMED;
          elem.TMIN = data[valZi + q].TMIN;
          todisplay.push(elem);
          // $("#values").append("<p>"+ data[valZi+q].DATCLIM + " "+ data[valZi+q].CODST + " "+ data[valZi+q].TMAX+" Grade celsius</p>");
          console.log(data[valZi + q].DATCLIM, " ", data[valZi + q].CODST, " ", data[valZi + q].TMAX)
        }
        break;
      default:
        console.log("?");
    }

    var check = function () {
    if (typeof Write !== 'undefined') {
        // run when condition is met
         Clear();
        Write();
       
      }
      else {
        console.log("incerc")
        setTimeout(check, 2000); // check again in a second
      }
    }
    check();

    // Clear();
    // Write();
  }
}

var Interval;
var start = 0;
var next = 1;

Display1(-1, 0);
function Play() {
  console.log("PLAY");
  next = rangeluna.result.from;
  Interval = setInterval(function () {
    if (next > 11) {
      next = 0;
      rangeluna.update({
        from: next
      })
    }
    if (start > 29) {
      start = 0;
      next = next + 1;
      rangeluna.update({
        from: next
      })
    } else {
      nextzi = rangezi.result.from;
      start = nextzi + 1;
    }
    var x = {
      from: start
    };
    Display1(x, next);
    rangezi.update({
      from: x.from
    });
  }, 1000)

}
function Stop() {
  clearInterval(Interval);
}







