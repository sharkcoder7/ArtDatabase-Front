import { Component, OnInit} from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { SliderType, SliderComponent, LimitDataModel } from '@syncfusion/ej2-angular-inputs';

@Component({
  selector: 'app-artdatabase',
  templateUrl: './artdatabase.component.html',
  styleUrls: ['./artdatabase.component.scss']
})
export class ArtdatabaseComponent implements OnInit {

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 18,
    currentPage:1
  }
  firstitem = 0;
  enditem = 0;

  public range: SliderComponent;
  public rangeValue: number[] = [1800, 1900];
  public rangeType: SliderType = 'Range';
  public min: number = 1800;
  public max: number = 2020;
  public sliderTrack: HTMLElement;
  public sliderFirstHandle: HTMLElement;
  public sliderSecondHandle: HTMLElement;
  public rangeLimits: LimitDataModel = { enabled: true, minStart: 1800, minEnd: 1900, maxStart: 1900, maxEnd: 2020 };

  public seletedTab: string = 'artworks';
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
  artworks = [];
  exhibitions = [];
  galleries = [];
  museums = [];
  artists = [];
  auctions = [];
  events = [];
  totalResults = 0;
  selectedSort = 0;
  sorts = [
    {
      'id': 0,
      'title': 'Default',
    },
    {
      'id': 2,
      'title': 'Name',
    },
  ];
  status = {
    artwork_type: true,
    country_city: true,
    creation_date: true,
    year_range: true,
    images: true,
  }

  ///// dummy data////
  artwork_types = [
    {
      title: 'Painting'
    },
    {
      title: 'Photograph'
    },
    {
      title: 'Sculpture'
    },
    {
      title: 'Icon'
    },
    {
      title: 'Print'
    },
    {
      title: 'Basketry'
    },
    {
      title: 'Vessel'
    },
    {
      title: 'Religious/Ritual Object'
    },
    {
      title: 'Coin'
    },
    {
      title: 'Funerary Object'
    },
    {
      title: 'Arms'
    },
    {
      title: 'Textile'
    },
    {
      title: 'Furniture'
    },
    {
      title: 'Mask'
    },
    {
      title: 'Decorative Arts'
    },
    {
      title: 'Architectural Fragment'
    },
    {
      title: 'Armor'
    },
    {
      title: 'Miniature Painting'
    },
    {
      title: 'Design'
    },
    {
      title: 'Graphic Design'
    },
    {
      title: 'Film, Video, New Media'
    },
    {
      title: 'Architectural Drawing'
    },
    {
      title: 'Audio-Video'
    },
    {
      title: 'Book'
    },
    {
      title: 'Costume and Accessories'
    },
    {
      title: 'Digital Arts'
    },
    {
      title: 'Model'
    },
    {
      title: 'Metalwork'
    },
    {
      title: 'Ceramics'
    },
    {
      title: 'Glass'
    },
    {
      title: 'Coverings and Hangings'
    },
    {
      title: 'Prototypes'
    },
    {
      title: 'Furnishings'
    },
    {
      title: 'Drawing and Watercolor'
    },
    {
      title: 'Mixed Media'
    },
    {
      title: 'Installation'
    },
    {
      title: 'Performance Arts'
    },
    {
      title: 'Miniature Room'
    },
    {
      title: 'Non-Art'
    },
    {
      title: 'Medals'
    },
    {
      title: 'Archives(groupings)'
    },
    {
      title: 'Equipment'
    },
    {
      title: 'Materials'
    },
  ];
  years = [];
  cards;
  countries = [
    {title: 'United States', id: 1},
    {title: 'United Kingdom' , id: 2},
  ]
  selectedCountry = 1;
  cities = [
    {title: 'Washington' , id: 1},
    {title: 'New York', id: 2},
    {title: 'London' , id: 3},
    {title: 'Manchester' , id: 4},
  ]
  selectedCity = 2;

  constructor() {
    this.totalResults = 157;
    for (let i = 1; i <= this.totalResults; i++) {
      this.artworks.push(
        {artist: 'Vincent van Gogh '+i}
      )
      this.exhibitions.push(
        {title: 'Heritage: Photographs '+i}
      )
      this.galleries.push(
        {title: 'Newark Gallery '+i}
      )
      this.museums.push(
        {title: 'Newark Museum '+i}
      )
      this.artists.push(
        {title: 'Walter Gregory ' + i}
      )
      this.auctions.push(
        {title: 'Oliver Clatworthy: Prints & Editions ' + i}
      )
      this.events.push(
        {title: 'Itineris: Modern and Contemporary Art ' + i}
      )
    }
    for (let i = 2000; i <= (new Date()).getFullYear(); i++) {
      this.years.push(
        { title: i }
      )
    }
    this.cards = Array(4).fill(4);
  }

  ngOnInit() {
    this.setPageItem(1);
  }

  changeTab(tab: string) {
    this.seletedTab = tab;
    this.config.currentPage = 1;
    window.scrollTo(0, 0);
    this.setPageItem(1);
  }

  onLocation() {
    console.log(this.selectedLocation);
  }

  pageChanged(event) {
    this.config.currentPage = event;
    this.setPageItem(event);
    console.log(event)
  }

  onSort() {
    console.log(this.selectedSort);
  }

  onCollapse(item) {
    console.log(item);
    this.status[item] = !this.status[item];
  }

  setPageItem(num) {
    this.firstitem = (num - 1) * this.config.itemsPerPage + 1;
    this.enditem = (num - 1) * this.config.itemsPerPage + 18;
    if (this.totalResults < this.enditem) {
      this.enditem = this.enditem - (this.enditem - this.totalResults);
    }
  }

  selectCountry() {
    console.log(this.selectedCountry);
  }

  selectCity() {
    console.log(this.selectedCity);
  }

  onCreated(): void {
    this.sliderTrack = document.getElementById('range').querySelector('.e-range');
    this.sliderFirstHandle = document.getElementById('range').querySelector('.e-handle.e-handle-first');
    this.sliderSecondHandle = document.getElementById('range').querySelector('.e-handle.e-handle-second');
    (this.sliderFirstHandle as HTMLElement).style.backgroundColor = '#7976ff';
    (this.sliderSecondHandle as HTMLElement).style.backgroundColor = '#7976ff';
    (this.sliderTrack as HTMLElement).style.backgroundColor = '#7976ff';
  }

}
