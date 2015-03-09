var map = L.map('map').setView([40.745198, -73.981476], 13);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var mapDataArray = mapData.rows;

for (var i = 0; i < mapDataArray.length; i++) {
	
	var location = mapDataArray[i];
	
var marker = L.marker([location.latitude, location.longitude]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup </b>").openPopup();