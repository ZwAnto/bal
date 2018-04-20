
function geo_sucess(position) {

    var geoLoc = position.coords;
    latlngOrigin = {lat: geoLoc.latitude, lng: geoLoc.longitude};
    map.setView(latlngOrigin);
    map.setZoom(16);

    var geocoder = new google.maps.Geocoder;
    geocoder.geocode({'location': latlngOrigin}, function (results, status) {
        var popupText = latlngOrigin[0] + ',' + latlngOrigin[1];
        if (status === 'OK') {
            if (results[0]) {
                var popupText = results[0].formatted_address;
            } else {
                alert('No results found');
            }
        } else {
            alert('Geocoder failed due to: ' + status);
        }
        $('#inputAddress').val(popupText);


        markers.clearLayers();
        var marker = L.marker(latlngOrigin);
        marker.addTo(markers);

        getBal();

    });
}
function geo_error(err) {
    if (err.code == 1) {
        alert('Permission denied');
    }
    if (err.code == 2) {
        alert('Position unavailable');
    }
    if (err.code == 3) {
        alert('Position unavailable');
    }
}
function getLoc() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(geo_sucess, geo_error, {enableHighAccuracy: true, timeout: 5000});
    }
}

function geo_code(address) {


    var geocoder = new google.maps.Geocoder;
    geocoder.geocode({'address': address}, function (results, status) {
        if (status == 'OK') {

            var geoLoc = {latitude: results[0].geometry.location.lat(), longitude: results[0].geometry.location.lng()};

            latlngOrigin = {lat: geoLoc.latitude, lng: geoLoc.longitude};
            map.setView(latlngOrigin);
            map.setZoom(16);

            markers.clearLayers();
            var marker = L.marker(latlngOrigin);
            marker.addTo(markers);

            getBal();
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });

}
$('#inputAddress').keyup(function(e){
    if(e.keyCode == 13)
    {
       geo_code($('#inputAddress').val());
    }
});




