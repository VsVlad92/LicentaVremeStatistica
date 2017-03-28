
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
               location: new google.maps.LatLng(statie.lat, statie.lon),
               weight: 220
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

        var heatmap = new google.maps.visualization.HeatmapLayer({
            data: heatMapData
        });
        
        heatmap.setMap(map);
}


