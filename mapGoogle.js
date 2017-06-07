
var map;
var cityCircle;
var circles = [];
var markers = [];

function initMap() {

      var stylez2 = [
          {
            featureType: "all",
            elementType: "labels",
            stylers: [
              { visibility: "off" }
            ]
          }
        ];
      var MY_MAPTYPE_ID2 = 'no-labels';

        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 45.8207836, lng:24.8523799},
            zoom: 7,
            scrollwheel:  false,
            mapTypeId: google.maps.MapTypeId.TERRAIN,
            styles: stylez2
        });
     
        var icons = {
          temp1: {
            name: '-5',
            color: "#FFFFFF"
          },
          temp2: {
            name: '-5 - 0',
            color: "#E1F6FB"
          },
          temp3: {
            name: '0-5',
            color: "#BCEEFB"
          },
          temp4: {
            name: '5 - 10',
            color: "#B9ECD8"
          },
          temp5: {
            name: '10 - 15',
            color: "#CADB92"
          },
          temp6: {
            name: '15 - 20',
            color: "#FFEB88"
          },
          temp7: {
            name: '20 - 25',
            color: "#FBC25E"
          },
          temp8: {
            name: '30 - 35',
            color: "#FF7B33"
          },
          temp9: {
            name: '35 - 40',
            color: "#CD5B12"
          },
        };

        var legend = document.getElementById('legend');
        if(legend){
          for (var key in icons) {
            var type = icons[key];
            var name = type.name;
            var color = type.color;
            var div = document.createElement('div');
            div.innerHTML = '<span class=legend style=background-color:'+ color + '>'+ name +'</span> ';
            legend.appendChild(div);
          }
            map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
        }
  }

function setColor(nr){
  if( nr <= -5)
    return "#FFFFFF"
  if( nr >= -5 && nr < 0)
    return "#E1F6FB"
  if( nr >= 0 && nr < 5)
    return "#BCEEFB"
  if( nr >= 5 && nr < 10)
    return "#B9ECD8"  
  if( nr >= 10 && nr < 15)
    return "#CADB92"  
  if( nr >= 15 && nr < 20)
    return "#FFEB88" 
  if( nr >= 20 && nr < 25)
    return "#FBC25E" 
  if( nr >= 25 && nr < 30)
    return "#FF7B33"  
  if( nr >= 30 && nr < 35)
    return "#CD5B12" 
  if( nr >= 35 )
    return "#cc5408"   

}

function Write(){
  console.log("WRITE")
        var heatMapData =[];
        var i=0;
        statiiMeteo.forEach(function(statie,index){
          // todisplay[i]
          if(todisplay[i] != undefined){ 
            var z = {
               Data: todisplay[i].DATCLIM,
               Alt: todisplay[i].ALT,
               Tmed: todisplay[i].TMED,
               Tmin: todisplay[i].TMIN,
               Name: statie.name,
               Cod: todisplay[i].CODST,
               Tmax: todisplay[i].TMAX,
               center: {lat: statie.lat, lng : statie.lon},
               weight: 99999
           }
          }else {
            var z = {
                center: {lat: statie.lat, lng : statie.lon},
                weight: 99999
            }
           }
           i++;
           heatMapData.push(z);
        })
        console.log("heat map  : " ,heatMapData);
        
        //heatmap.setMap(map);
        var i=0;
         if(todisplay[i] != undefined){ 
          heatMapData.forEach(function(statie,index){
            // Add the circle for this city to the map.
            var cityCircle = new google.maps.Circle({
              id:i,
              strokeColor: setColor(todisplay[i].TMAX),
              strokeOpacity: 0.6,
              strokeWeight: 2,
              fillColor: setColor(todisplay[i].TMAX),
              fillOpacity: 0.35,
              map: map,
              center: statie.center,
              radius: Math.sqrt(statie.weight) * 100,
              label: todisplay[i].TMED+"°C"
            });

             circles.push(cityCircle);

             var marker = new google.maps.Marker({
              position: statie.center,
              map: map,
              title: 'Temperatura Medie',
              label: {
                text : todisplay[i].TMED+"°C",
                fontWeight: "600",
                fontSize: "34"
            },
              icon: "./img.ico"
            });

            markers.push(marker);
            
            google.maps.event.addListener(cityCircle, 'click', function(ev) {
                console.log(this.id);
                var infoWindow = new google.maps.InfoWindow({
                      content : '<div class=><p><strong>Numele Statiei Meteo</strong>: '+heatMapData[this.id].Name+'</p>'+
                                '<p><strong>Temperatura Maxima a zilei</strong>: '+heatMapData[this.id].Tmax+'°C</p>'+
                                '<p><strong>Temperatura Minima a zilei</strong>: '+heatMapData[this.id].Tmin+'°C</p>'+
                                '<p><strong>Temperatura Medie a zilei</strong>: '+heatMapData[this.id].Tmed+'°C</p>'+
                                '<p><strong>Altitudinea Statiei Meteo</strong>: '+heatMapData[this.id].Alt+'m</p>' +
                                '<p><strong>Data</strong>: '+heatMapData[this.id].Data+'</p></div>'
                                ,
                      maxWidth: 500
                }); 
                infoWindow.setPosition(ev.latLng);
                infoWindow.open(map);
            });

            console.log(setColor(todisplay[i].TMAX))
            i++;
          })
   }
}

function Clear(){
  console.log("CLEAR")
  console.log(circles);

  for (var i = 0; i < circles.length; i++) {
          circles[i].setMap(null);
          markers[i].setMap(null);
        }
}


