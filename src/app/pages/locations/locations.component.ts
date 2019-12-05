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

  lat = 40.730610;
  lng = -73.935242;

  styles =  [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "color": "#ff7000"
            },
            {
                "lightness": "69"
            },
            {
                "saturation": "100"
            },
            {
                "weight": "1.17"
            },
            {
                "gamma": "2.04"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#cb8536"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "color": "#ffb471"
            },
            {
                "lightness": "66"
            },
            {
                "saturation": "100"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "gamma": 0.01
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "saturation": -31
            },
            {
                "lightness": -33
            },
            {
                "weight": 2
            },
            {
                "gamma": 0.8
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "-8"
            },
            {
                "gamma": "0.98"
            },
            {
                "weight": "2.45"
            },
            {
                "saturation": "26"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 30
            },
            {
                "saturation": 30
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#efc779"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "saturation": 20
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 20
            },
            {
                "saturation": -20
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 10
            },
            {
                "saturation": -30
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "saturation": 25
            },
            {
                "lightness": 25
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#e2ac1c"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#bd8924"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c58319"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c88d24"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "lightness": -20
            },
            {
                "color": "#ecc080"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f3edbe"
            }
        ]
    }
];

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
