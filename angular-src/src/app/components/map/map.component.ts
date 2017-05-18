import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BookmarksService } from "../../services/bookmarks.service";
import { UsersService } from "../../services/users.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Bookmark } from "../../models/bookmark";
import * as L from 'leaflet';
// import * as WMS from "leaflet.wms";
import "leaflet.locatecontrol";
import "leaflet-fullscreen";
import "leaflet-easybutton";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css', '../../../../node_modules/leaflet/dist/leaflet.css',
    '../../../../node_modules/leaflet.locatecontrol/dist/L.Control.Locate.min.css',
    '../../../../node_modules/leaflet-fullscreen/dist/leaflet.fullscreen.css',
    '../../../../node_modules/leaflet-easybutton/src/easy-button.css'
  ],
  encapsulation: ViewEncapsulation.None
})

export class MapComponent implements OnInit {

  map: L.Map;
  editedBookmark: Bookmark;
  centerPoint: L.LatLng;
  bookmarks: Bookmark[];
  markerGroup: L.FeatureGroup;

  constructor(
    private bookmarksService: BookmarksService,
    private usersService: UsersService,
    private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.centerPoint = new L.LatLng(30.049642, 31.256021);
    if (!this.usersService.loggedIn()) {
      this.flashMessagesService.show("you can check the map, but you won't be able to add bookmarks without login", {
        cssClass: 'alert-danger', timeout: 4000
      })
      this.initializeMap(false);
   
    }
    else {
      this.initializeMap(true);
      this.getMarkers(false);
    }
  }

  mapclick_creatMarker(e: L.MouseEvent) {
    let bookmark = {
      lat: e.latlng.lat,
      lng: e.latlng.lng,
      title: "untitled"
    }
    this.bookmarksService.addBookmark(bookmark).subscribe(res => {
      this.createMarkerFunction(res.bookmark)
    })
  };


  createMarkerFunction(bookmark: Bookmark) {
    let marker = L.marker([bookmark.lat, bookmark.lng], {
      draggable: true,
      title: bookmark.title,
      riseOnHover: true,
      icon: L.icon({
        iconUrl: "assets/marker-icon.png"
      })
    }).on('click',
      (e: L.MouseEvent) => {
        console.log(e);
        console.log(this)
        this.editedBookmark = bookmark;
        (<any>this.editedBookmark).left = e.containerPoint.x + 5 + "px";
        (<any>this.editedBookmark).top = e.containerPoint.y - 20 + "px";
        console.log(this.editedBookmark);
      }
      );
    this.markerGroup.addLayer(marker)
    // this.bookmarksService.addBookmark(marker)
  };



  getMarkers(removeOld){
    console.log(removeOld);
    if(removeOld){
    this.map.removeLayer(this.markerGroup);
    }
      this.markerGroup = L.featureGroup(
      );
      this.markerGroup.addTo(this.map);


      this.bookmarksService.getBookmarks().subscribe(res => {
        if (res.bookmarks) {
          this.bookmarks = res.bookmarks;
          this.bookmarks.forEach(this.createMarkerFunction.bind(this));
        }
      });
  }

  initializeMap(loggedIn) {

    // set up the map
    this.map = new L.Map('map', { minZoom: 7, maxZoom: 14 });
    this.map.setView(this.centerPoint, 12);

    // create the tile layer with correct attribution for osm
    let osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    let osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    let osm = new L.TileLayer(osmUrl, { attribution: osmAttrib });

    let OpenTopoMap = L.tileLayer('http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });
    this.map.addLayer(OpenTopoMap);
   
    // wms extension for leaflet
    // let MySource = (<any>L).WMS.Source.extend({
    //   // 'parseFeatureInfo': function(result, url){
    //   //  result =  JSON.parse(result);
    //   //     return JSON.stringify(result.features[0].properties);
    //   // }
    // });
    // // gridLayer
    // let gridLayer = new MySource("api/mapserver?",
    //   {
    //     'propertyName': 'male',
    //     'info_format': 'text/html',
    //     'format': 'image/png',
    //     'transparent': true,
    //   })
    // gridLayer.addSubLayer('datalytics:egypt_grid')
    // gridLayer.addTo(this.map);

    // map controls
    // locate control
    let lc = new (<any>L.Control).Locate({
      flyTo: true,
      position: 'bottomright',
      icon: 'fa fa-compass fa-lg'
    }).addTo(this.map);
    // full screen control
    let fullScreenControl = new (<any>L.Control).Fullscreen({
      pseudoFullscreen: true
    }).addTo(this.map);

    // google search controller

if(loggedIn){
// easy buttons
let bookmarksButton = (<any>L).easyButton({
        states: [{
          stateName: 'default-state',        // name the state
          icon: 'fa fa-map-marker fa-lg',               // and define its properties
          title: 'click to add bookmark',      // like its title
          onClick: (btn, map) => {
            btn.state('bookmark-state');    // change state on click!
            this.map.on('click', this.mapclick_creatMarker.bind(this))
          }
        }, {
          stateName: 'bookmark-state',
          icon: 'fa fa-university fa-lg',
          title: 'finish adding bookmark',
          onClick: (btn, map) => {
            this.map.off('click', this.mapclick_creatMarker.bind(this));
            // this.map.on('click',e=>console.log(e))
            btn.state('default-state');    // change state on click!
          }
        }]
      });
      bookmarksButton.addTo(this.map);
}

    //layer control
    var baseLayers = {
      "openTopoMap": OpenTopoMap,
      "OpenStreetMap": osm,
    };
    var overlays = {
      // "Markers": this.markerGroup,
      // "Roads": roadsLayer
    };
    L.control.layers(baseLayers, overlays).addTo(this.map);

  }
}
