import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as L from 'leaflet';
import * as WMS from 'leaflet.wms' ;
import * as Locate from "leaflet.locatecontrol";
import  "leaflet-fullscreen";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css', '../../../../node_modules/leaflet/dist/leaflet.css',
  '../../../../node_modules/leaflet.locatecontrol/dist/L.Control.Locate.min.css','../../../../node_modules/leaflet-fullscreen/dist/leaflet.fullscreen.css'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit {

  map: L.Map;
  centerPoint: L.LatLng;


  constructor() { }

  ngOnInit() {
    (<any>L.Control).Locate = Locate;
    (<any>L).WMS = WMS;
      this.centerPoint = new L.LatLng(30.049642, 31.256021);
      // this.getcurrentLocation();
      this.initializeMap();

 
  }

//   getcurrentLocation() {
//     /// get user location /////
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition.bind(this), showPositionError.bind(this));
//       } else {
//         alert("Geolocation is not supported by this browser.");
//       }
//   function showPosition(position) {
//      this.centerPoint = new L.LatLng(position.coords.latitude, position.coords.longitude);
//      this.updateMap();
//         }
//  function  showPositionError(error) {
//       switch (error.code) {
//         case error.PERMISSION_DENIED:
//           alert("User denied the request for Geolocation.")
//           break;
//         case error.POSITION_UNAVAILABLE:
//           alert("Location information is unavailable.")
//           break;
//         case error.TIMEOUT:
//           alert("The request to get user location timed out.")
//           break;
//         case error.UNKNOWN_ERROR:
//           alert("An unknown error occurred.")
//           break;
//       }
//     }
  // }
   
  initializeMap(){
       // set up the map
    this.map = new L.Map('map');

    // create the tile layer with correct attribution
    let osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    let osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    let osm = new L.TileLayer(osmUrl, { minZoom: 4, maxZoom: 18, attribution: osmAttrib });

    // start the map in South-East England
    this.map.setView(this.centerPoint, 12);
    this.map.addLayer(osm);
    // let MySource = (<any>L).WMS.Source.extend({
    // 'parseFeatureInfo': function(result, url){
    //  result =  JSON.parse(result);
    //     return JSON.stringify(result.features[0].properties);
    // }
    // });
    let gridLayer =new (<any>L).WMS.Source("http://localhost:8080/geoserver/datalytics/wms?", 
  {
    'propertyName':'male',
    'info_format':'text/html',
    'format': 'image/png',
    'transparent': true,
  })
gridLayer.addSubLayer('datalytics:egypt_grid')
   gridLayer.addTo(this.map);
let lc = new (<any>L.Control).Locate({
   flyTo:true
}).addTo(this.map);
let fullScreenControl = new (<any>L.Control).Fullscreen({
  pseudoFullscreen: true
}).addTo(this.map);
    ///  hacking  the marker icon problem in leaflet

    // let DefaultIcon = L.icon({
    //   iconRetinaUrl: '/images/marker-icon-2x.png',
    //   iconUrl: '../../../../node_modules/leaflet/dist/images/marker-icon.png',
    //   shadowUrl: '../../../../node_modules/leaflet/dist/images/marker-shadow.png',
    // });

    // L.Marker.prototype.options.icon = DefaultIcon;

    // function onMapClick(e) {
    //   let marker = L.marker(e.latlng).addTo(this.map);
    // }
    // let circle = L.circle([51.3, 0.7], {
    //   color: 'red',
    //   fillColor: '#f03',
    //   fillOpacity: 0.5,
    //   radius: 500
    // }).addTo(this.map);
    // L.control.layers().addTo(this.map);
    // this.map.on('click', onMapClick);
  }
  updateMap(){
    this.map.setView(this.centerPoint, 9);
  }
}
