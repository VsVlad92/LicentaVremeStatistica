
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


}


