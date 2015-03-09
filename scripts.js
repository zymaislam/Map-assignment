var map = L.map('homelessMap').setView([40.745198, -73.981476], 13);
//this is setting my default coordinates to new york

//this is my map tile

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution : '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var mapDataArray = mapData.rows;

for (var i = 0; i < mapDataArray.length; i++) {
	
	var locationCenter = mapDataArray[i];
	
var marker = L.marker([locationCenter.latitude, locationCenter.longitude]).addTo(map);

marker.bindPopup("<b>*Full address*</b>This is the homeless shelter in *borough*<br>").openPopup();
