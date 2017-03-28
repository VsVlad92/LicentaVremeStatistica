
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 45.8207836, lng:24.8523799},
        zoom: 7,
        mapTypeId: 'terrain'
    });
    // var coords1 = 46.403586;
    // var coords2 = 26.7307701;
    // var latLng = new google.maps.LatLng(coords1,coords2);
    // var marker = new google.maps.Marker({
    //     position: latLng,
    //     map: map
    // 
    statiiMeteo.forEach(function(statie){
        var latLng = new google.maps.LatLng(statie.lat,statie.lon);
        var marker = new google.maps.Marker({
         position: latLng,
         map: map
    })
})
}


