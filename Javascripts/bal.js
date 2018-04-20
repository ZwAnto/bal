
function getBal(){
    var bounds = map.getBounds();

    var lat1 = bounds._northEast.lat;
    var lng1 = bounds._northEast.lng;
    var lat2 = bounds._southWest.lat;
    var lng2 = bounds._southWest.lng;

    var geofilter = '(' + lat1 + ',' + lng1 + '),(' + lat2 + ',' + lng1 + '),(' + lat2 + ',' + lng2 + '),(' + lat1 + ',' + lng2 + ')';

    var api = 'https://datanova.laposte.fr/api/records/1.0/search/?dataset=laposte_boiterue&rows=10000&facet=lb_voie_ext&facet=lb_com&facet=co_postal&geofilter.polygon=' + geofilter;

    $.get(api,function(json){
        console.log(json);

        var n = json.nhits;

        for (i=0;i<json.records.length;i++){
            var latlng = json.records[i].fields.latlong;
            var address = json.records[i].fields.va_no_voie +  ' ' + json.records[i].fields.lb_voie_ext +  ' ' + json.records[i].fields.co_postal +  ' ' + json.records[i].fields.lb_com;

            var icon =  L.divIcon({
                icon: '',
                iconSize: [30, 30],
                iconAnchor: [15, 30],
                popupAnchor: [-4, -30],
                html: '<i class="fas fa-map-marker"></i>'
            });

            var marker = L.marker(latlng,{icon: icon}).bindPopup(address);

            marker.addTo(markers);
        }

    });
}