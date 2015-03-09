var map = L.map('homelessMap').setView([40.745198, -73.981476], 13); //this is setting my default coordinates to new york
 
//this is my map tile

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution : '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([40.745198, -73.981476]).addTo(map;)

/*var numShelter = warmShelterData.rows;

for (var i = 0; i < numShelter.length; i++) {
	var onewarmShelter = numShelter [i];
	
	

	var marker = L.marker([onewarmShelter.Lat, onewarmShelter.Lng]).addTo(map);
	marker.bindPopup("<b>" +onewarmShelter.FullAddress+"</br><br>"+onewarmShelter.ProgramName);
};