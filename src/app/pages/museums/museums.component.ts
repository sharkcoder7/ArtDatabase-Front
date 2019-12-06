import { Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-museums',
  templateUrl: './museums.component.html',
  styleUrls: ['./museums.component.scss']
})
export class MuseumsComponent implements OnInit {
  museum;
  styles = environment.googleMapStyleVintage;

  lat = 40.730610;
  lng = -73.935242;
  /*
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = -73.958965;
  lng = 40.782933;*/

  images;
  itemsPerSlide = 4;
  singleSlideOffset = true;
  noWrap = false;

  constructor(private dataService: DataService) {
    this.museum = {
      name: 'Guggenheim',
      city: 'New York',
      street: 'New York',
      opentime: '10:00 ~ 18:00',
      ticketprice: '$200',
      description: 'A very brief, but still description summary of what artworkm styles, ad artists are popularly kept in this museum, when it was built, and any prominent cultural significance',
      building: 'https://i0.wp.com/www.guggenheim.org/wp-content/uploads/2016/05/gen-news20160526-bluestarmuseums-srgm2.jpg.jpg?w=870&zoom=2',
      interior: 'https://images.squarespace-cdn.com/content/v1/575ebcef2eeb81ff5b6cede9/1465921183763-OPFRLUU2TYW9E4OIPFHR/ke17ZwdGBToddI8pDm48kL9Y0ApcsgXOnv9LqlH3ohZ7gQa3H78H3Y0txjaiv_0fMpLXJDHshpzSe4ApxGrjXRcoGvJngZE4O0LzcE_YvX8YQuTHq4TUfa9obxc6bUph8eSOYnNd9sCB8xjAo8q6BvApyh6NsI3juLutxTva2hgqXPCabsorJQnZknVrmngl-XRv0YPUlDSm2SgGNJ8Z5A/D+Guggenheim+38.JPG',
      interior1: 'https://pbs.twimg.com/media/EGeqoTjW4AEoSio.jpg',
      establishedDate: 'Date Estableshed',
      exhibitionLink: 'Exhibitions Held/Being Currnetly Held',
      held: 'Exhibitions Held/Being Currnetly Held',
      exhibitionArts: 'Each exhibition has works that belong to it that were exhibited there. ',
      id: '1'
    }
    this.images = [
      {url: './assets/imgs/16.png', title: 'Painting by Artist'},
      {url: './assets/imgs/21.png', title: 'Painting by Artist'},
      {url: './assets/imgs/25.png', title: 'Painting by Artist'},
      {url: './assets/imgs/28.png', title: 'Painting by Artist'},
      {url: './assets/imgs/31.jpg', title: 'Painting by Artist'},
      {url: './assets/imgs/39.png', title: 'Painting by Artist'},
      {url: './assets/imgs/42.png', title: 'Painting by Artist'},
      {url: './assets/imgs/43.png', title: 'Painting by Artist'},
      {url: './assets/imgs/48.png', title: 'Painting by Artist'},
      {url: './assets/imgs/134.png', title: 'Painting by Artist'},
    ]
  }

  ngOnInit() {

    /*(mapboxgl as typeof mapboxgl).accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9',
      center: [this.lat, this.lng],
      zoom: 16.15
    });
    new mapboxgl.Marker()
      .setLngLat([this.lat, this.lng])
      .addTo(this.map);
    this.map.addControl(new mapboxgl.NavigationControl());*/
  }

}
