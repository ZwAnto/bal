map = L.map('map').setView([47,2], 12);
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(map);
map.setMinZoom(16);

markers = L.layerGroup();
markers.addTo(map);