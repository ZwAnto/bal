map = L.map('map').setView([47,2], 12);
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(map);
map.setZoom(10);

map.zoomControl.setPosition('bottomleft');

markers = L.layerGroup();
markers.addTo(map);