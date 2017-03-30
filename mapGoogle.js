
var map;
var cityCircle;

function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 45.8207836, lng:24.8523799},
            zoom: 7,
            mapTypeId: 'terrain'
        });
        var infoWindow = new google.maps.InfoWindow({
            maxWidth: 500
        }); 

        var heatMapData =[];
        var i=0;
        statiiMeteo.forEach(function(statie,index){
          // todisplay[i]
          if(todisplay[i] != undefined){ 
            var z = {
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
        console.log(heatMapData);
        
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
              radius: Math.sqrt(statie.weight) * 100
            });
            infoWindow.content = "asdasd";
            google.maps.event.addListener(cityCircle, 'click', function(ev) {
                console.log(this.id);
                var infoWindow = new google.maps.InfoWindow({
                      content : "<p>"+todisplay[this.id].TMAX+"</p>",
                      maxWidth: 500
                }); 
                infoWindow.setPosition(ev.latLng);
                infoWindow.open(map);
            });

            console.log(setColor(todisplay[i].TMAX))
            i++;
          })
         }

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

        var bool = true;
        var legend = document.getElementById('legend');
       // if(bool){
          for (var key in icons) {
            var type = icons[key];
            var name = type.name;
            var color = type.color;
            var div = document.createElement('div');
            div.innerHTML = '<span class=legend style=background-color:'+ color + '>'+ name +'</span> ';
            legend.appendChild(div);
          }
           bool = false;
            map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
       // }

       


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


