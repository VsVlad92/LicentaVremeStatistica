
var map;

function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 45.8207836, lng:24.8523799},
            zoom: 7,
            mapTypeId: 'terrain'
        });

        var heatMapData =[];
        statiiMeteo.forEach(function(statie,index){
           var z = {
               center: {lat: statie.lat, lng : statie.lon},
               weight: 99999
           }
           heatMapData.push(z);
        })
        console.log(heatMapData);
        // statiiMeteo.forEach(function(statie){
        //         var latLng = new google.maps.LatLng(statie.lat,statie.lon);
        //         var marker = new google.maps.Marker({
        //         position: latLng,
        //         map: map
        //     })
        // })


        // var heatmap = new google.maps.visualization.HeatmapLayer({
        //     data: heatMapData
        // });
        
        //heatmap.setMap(map);
        heatMapData.forEach(function(statie,index){
          // Add the circle for this city to the map.
          var cityCircle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            center: statie.center,
            radius: Math.sqrt(statie.weight) * 100
          });
         })

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
        for (var key in icons) {
          var type = icons[key];
          var name = type.name;
          var color = type.color;
          var div = document.createElement('div');
          div.innerHTML = '<span style=background-color:'+ color + '>'+ name +'C</span> ';
          legend.appendChild(div);
        }

        map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);


}


