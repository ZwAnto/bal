function mapInit(){
    map = L.map('map');
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png').addTo(map);
    map.setZoom(16);

    map.zoomControl.setPosition('bottomleft');

    markers = L.featureGroup();
    markers.addTo(map);
    
    getLoc();
}