function geo_sucess(position) {

    var geocoder = new google.maps.Geocoder;

    var geoLoc = position.coords;
    var latlng = {lat: geoLoc.latitude, lng: geoLoc.longitude};

    geocoder.geocode({'location': latlng}, function (results, status) {
        if (status === 'OK') {
            if (results[1]) {
                
                map.setView(latlng);

                var marker = L.marker(latlng).bindPopup(results[0].formatted_address);
                marker.addTo(map);
                
                getBal();
            } else {
                window.alert('No results found');
            }
        } else {
            window.alert('Geocoder failed due to: ' + status);
        }
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
        navigator.geolocation.getCurrentPosition(geo_sucess, geo_error, {enableHighAccuracy: false, timeout: 50000});
    }
}

function getLoc(){
     if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(geo_sucess, geo_error, {enableHighAccuracy: true, timeout: 50000});
    }
}
   





[[48.996888575095596, 2.5011062622070317],[48.78040136289704, 2.5011062622070317],[48.78040136289704, 2.132377624511719],[48.78040136289704, 2.132377624511719]]

((48.996888575095596,2.5011062622070317),(48.78040136289704,2.5011062622070317),(48.78040136289704,2.132377624511719),(48.78040136289704,2.132377624511719))