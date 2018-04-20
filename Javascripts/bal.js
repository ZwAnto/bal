function addMarker(i, json, icon, layer, service) {
    var latlng = json.records[i].fields.latlong;
    
    var destination = [{lat: latlng[0], lng: latlng[1]}];
    service.getDistanceMatrix({
        origins: [latlngOrigin],
        destinations: destination,
        travelMode: 'WALKING',
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
    }, function (response, status) {

        var address = json.records[i].fields.va_no_voie + ' ' + json.records[i].fields.lb_voie_ext + '<br>' + json.records[i].fields.co_postal + '<br>' + json.records[i].fields.lb_com + '<br>';
        var latlng = json.records[i].fields.latlong;

        if (status !== 'OK') {
            alert('Error was: ' + status);
        } else {
            address += '<br>' + response.rows[0].elements[0].distance.text;
            address += '<br>' + response.rows[0].elements[0].duration.text;
        }
        //var marker = L.marker(latlng, {icon: icon}).bindPopup(address);
        var marker = L.circleMarker(latlng, {radius: 8, stroke: true, weight: 1, color: '#fecb00'}).bindPopup(address);
        marker.addTo(layer);
    });
}
var icon = L.divIcon({
    icon: '',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [-4, -30],
    html: '<i class="fas fa-map-marker"></i>'
});
function getBal() {
    var bounds = map.getBounds();

    var lat1 = bounds._northEast.lat;
    var lng1 = bounds._northEast.lng;
    var lat2 = bounds._southWest.lat;
    var lng2 = bounds._southWest.lng;

    var geofilter = '(' + lat1 + ',' + lng1 + '),(' + lat2 + ',' + lng1 + '),(' + lat2 + ',' + lng2 + '),(' + lat1 + ',' + lng2 + ')';
    var api = 'https://datanova.laposte.fr/api/records/1.0/search/?dataset=laposte_boiterue&rows=1000&facet=lb_voie_ext&facet=lb_com&facet=co_postal&geofilter.polygon=' + geofilter;
    var api = 'https://datanova.laposte.fr/api/records/1.0/search/?dataset=laposte_boiterue&rows=1000&facet=lb_voie_ext&facet=lb_com&facet=co_postal&geofilter.distance=' + latlngOrigin.lat + ',' + latlngOrigin.lng + ',500';
   
    console.log(api);

    var service = new google.maps.DistanceMatrixService;

    $.get(api, function (json) {

        var n = json.nhits;

        for (i = 0; i < json.records.length; i++) {
            addMarker(i, json, icon, markers, service);
        }
    });
}