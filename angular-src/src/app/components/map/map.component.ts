import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css','../../../../node_modules/leaflet/dist/leaflet.css'],
  encapsulation : ViewEncapsulation.None
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // set up the map
let	map = new L.Map('map');

	// create the tile layer with correct attribution
	let osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	let osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	let osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib});		

	// start the map in South-East England
	map.setView(new L.LatLng(51.3, 0.7),9);
	map.addLayer(osm);
///  hacking  the marker icon problem in leaflet

let DefaultIcon = L.icon({
   iconRetinaUrl: '/images/marker-icon-2x.png',
    iconUrl: '../../../../node_modules/leaflet/dist/images/marker-icon.png',
    shadowUrl: '../../../../node_modules/leaflet/dist/images/marker-shadow.png',
});

// L.Marker.prototype.options.icon = DefaultIcon;

  function onMapClick(e) {
   let marker = L.marker(e.latlng).addTo(map); 
}
var circle = L.circle([51.3, 0.7], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
L.control.layers().addTo(map);
  map.on('click', onMapClick);
  }

}
