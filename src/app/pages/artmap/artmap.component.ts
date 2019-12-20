import { Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-artmap',
  templateUrl: './artmap.component.html',
  styleUrls: ['./artmap.component.scss']
})
export class ArtmapComponent implements OnInit {
  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 5,
    currentPage:1
  }

  styles = environment.googleMapStyleVintage;
  lat : any;
  lng : any;
  status: boolean = false;
  p: number = 1;
  datas = [];
  markers = [];
  maptype = 'terrain';
  arr_url = [
    {url: './assets/imgs/Artist.svg'},
    {url: './assets/imgs/Museum.svg'},
    {url: './assets/imgs/ArtWork.svg'},
    {url: './assets/imgs/Auction.svg'},
    {url: './assets/imgs/Exhibition.svg'},
    {url: './assets/imgs/Gallery.svg'},
  ];
  item_url = [
    {url: './assets/imgs/Museum_item.svg'},
    {url: './assets/imgs/ArtWork_item.svg'},
    {url: './assets/imgs/Auction_item.svg'},
    {url: './assets/imgs/Exhibition_item.svg'},
    {url: './assets/imgs/Gallery_item.svg'},
  ];
  pagenumber = 1;
  filterDatas = [];
  totalData = 0;
  selectedCategory = 0;
  categories = [
    {
      'id': 0,
      'title': 'All',
    },
    {
      'id': 1,
      'title': 'Exhibitions',
    },
    {
      'id': 2,
      'title': 'Museums',
    },
    {
      'id': 3,
      'title': 'ArtWroks',
    },
    {
      'id': 4,
      'title': 'Galleries',
    },
    {
      'id': 5,
      'title': 'Auctions',
    },
    {
      'id': 6,
      'title': 'Events',
    },
  ];
  selectedSort = 1;
  sorts = [
    {
      'id': 1,
      'title': 'Distance',
    },
    {
      'id': 2,
      'title': 'Name',
    },
    {
      'id': 1,
      'title': 'Address',
    },
  ];
  selectedLocation = 1;
  locations = [
    {
      'id': 1,
      'title': 'New York, USA',
    },
    {
      'id': 2,
      'title': 'London, UK',
    },
    {
      'id': 3,
      'title': 'Kyiv, UA',
    },
    {
      'id': 4,
      'title': 'Paris, FR',
    },
    {
      'id': 5,
      'title': 'Rome, IT',
    },
  ];
  searchValue = '';
  currentLocation = {
    url: './assets/imgs/current_location.svg',
    scaledSize: {
      height: 61,
      width: 61
    }
  };

  constructor() {
    if (navigator)
    {
      navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
        this.setMarker(1);
      });
    }
    for (let i = 1; i <= 50; i++) {
      this.datas.push(
        {
          title: 'Gabarron Foundation',
          distance: i,
          start_time: '09.00 AM',
          end_time: '07.00 PM',
          address: '401 North Michigan Avenue',
          city: 'Chicago',
          state: 'IL',
          pcode: '60611',
          phone_number: '587-509-8446',
          images: [
            { url: './assets/imgs/Img1.jpg'},
            { url: './assets/imgs/Img2.jpg'},
            { url: './assets/imgs/Img3.jpg'},
          ],
          open_status: this.isOdd(i),
          type: this.getType(i),
        }
      );
    }
    this.totalData = 50;
  }

  ngOnInit() {
  }

  clickEvent() {
    this.status = !this.status;
  }

  pageChanged(event) {
    this.config.currentPage = event;
    this.pagenumber = event;
    this.markers = [];
    this.setMarker(event);
  }

  setMarker(ind) {
    console.log(this.lng);
    console.log(this.lat);
    for (let i = 0; i <= 4; i++) {
      let num = (ind - 1) * 5 + i;
      if (typeof this.datas[num] !== 'undefined') {
        this.markers.push(
          {
            lat: this.lat + (ind+i) * Math.floor(Math.random() * 5) / 700,
            lng: this.lng + (ind+i) * Math.floor(Math.random() * 5) / 700,
            icon: {
              url: this.arr_url[i].url,
              scaledSize: {
                height: 30,
                width: 36
              }
            },
            data: {
              title: this.datas[num].title,
              start_time: this.datas[num].start_time,
              end_time: this.datas[num].end_time,
              address: this.datas[num].address,
              city: this.datas[num].city,
              state: this.datas[num].state,
              pcode: this.datas[num].pcode,
              phone_number: this.datas[num].phone_number,
              images: this.datas[num].images,
              open_status: this.datas[num].open_status,
            }
          }
        );
      }
    }
  }
  onSearch(event) {
    console.log(event);
  }
  onCategory() {
    console.log(this.selectedCategory);
  }
  onSort() {
    console.log(this.selectedSort);
  }
  onLocation() {
    console.log(this.selectedLocation);
  }

  ////functions to be deleted////////

  isOdd(int) {
    return int % 2;
  }

  getType(int) {
    let index = int % 6;
    return index + 1;
  }
}
