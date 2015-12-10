
var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});

var map = L.map('map', {
  center: [30.264071306509358,-97.74001836776733],
  zoom: 15,
  minZoom: 12,
  maxZoom: 17
});

map.addLayer(layer);