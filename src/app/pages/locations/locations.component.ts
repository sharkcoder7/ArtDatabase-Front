import {environment} from '../../../environments/environment';
import {Component, Input, ViewChild, NgZone, OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {DataService} from '../../services/data.service';
import { AgmMap } from '@agm/core';



@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  latitude = -28.68352;
  longitude = -147.20785;
  mapType = 'satellite';

  ngOnInit() {}
}



// google maps zoom level
  /*zoom: number = 8;

  lat: number = 51.673858;
  lng: number = 7.815982; */
/*

  locations = [
    {
      'id': 1,
      'name': 'The Starry Night 1',
      'coordinates': [-77.038659, 38.931567],
      'author': 'Vincent van Gogh',
      'location': 'Zundert, Netherlands',
      'color': 'red'
    },
    {
      'id': 2,
      'name': 'The Starry Night 2',
      'coordinates': [-77.003168, 38.894651],
      'author': 'Vincent van Gogh',
      'location': 'Zundert, Netherlands',
      'color': 'green'
    },
    {
      'id': 3,
      'name': 'The Starry Night 3',
      'coordinates': [-77.090372, 38.881189],
      'author': 'Vincent van Gogh',
      'location': 'Zundert, Netherlands',
      'color': 'blue'
    },
    {
      'id': 4,
      'name': 'The Starry Night 4',
      'coordinates': [-77.031706, 38.914581],
      'author': 'Vincent van Gogh',
      'location': 'Zundert, Netherlands',
      'color': 'purple'
    },
    {
      'id': 5,
      'name': 'The Starry Night 5',
      'coordinates': [-77.020945, 38.878241],
      'author': 'Vincent van Gogh',
      'location': 'Zundert, Netherlands',
      'color': '#165ee0'
    }
  ];

  constructor(private dataService: DataService) {
  }

  getUserLocation() {
    const dataService = this.dataService;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const params = position.coords.latitude +  ',' + position.coords.longitude;
        dataService.getAddressByGPS(params).subscribe((data: {city: string, inlatt: string, inlongt: string}) => {
          alert(data.city + ' ' + data.inlatt + ' ' + data.inlongt);
        }, error => {
          alert(position.coords.latitude + ' ' + position.coords.longitude);
        });
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  highlight(id) {
    // let place = {
    //   "type": "FeatureCollection",
    //   "features": [this.places.features[id]]
    // };
    // console.log(this.places.features[id]);
    // this.map.addSource(id.toString(), {
    //   "type": "geojson",
    //   "data": place
    // });
    //
    // this.map.addLayer({
    //   'id': id.toString(),
    //   'type': 'circle',
    //   'source': id.toString(),
    //   'layout': {
    //     'visibility': 'visible'
    //   },
    //   'paint': {
    //     'circle-radius': 12,
    //     'circle-color': '#fab4b4'
    //   }
    // });
  }
*/

    /*
    (mapboxgl as typeof mapboxgl).accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9',
      center: [-77.04, 38.907],
      zoom: 11.15
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    const map = this.map;
    const locations = this.locations;*/

    // this.map.on('load', function () {
    //   locations.forEach(function (location) {
    //     const feature = {
    //       'type': 'Feature',
    //       'properties': {
    //         'description': location['name'],
    //         'icon': 'circle'
    //       },
    //       'geometry': {
    //         'type': 'Point',
    //         'coordinates': location['coordinates']
    //       }
    //     };
    //
    //     map.addSource(location['id'].toString(), {
    //       'type': 'geojson',
    //       'data': {
    //         'type': 'FeatureCollection',
    //         'features': [feature]
    //       }
    //     });
    //
    //     map.addLayer({
    //       'id': location['id'].toString(),
    //       'type': 'circle',
    //       'source': location['id'].toString(),
    //       'layout': {
    //         'visibility': 'visible'
    //       },
    //       'paint': {
    //         'circle-radius': 12,
    //         'circle-color': location['color']
    //       }
    //     });
    //   });
    // });
