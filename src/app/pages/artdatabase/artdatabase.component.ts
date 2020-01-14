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

  public rangeValue: number[] = [1800, 1900];
  public rangeType: SliderType = 'Range';
  public min: number = 1800;
  public max: number = 2020;
  public sliderTrack: HTMLElement;
  public sliderFirstHandle: HTMLElement;
  public sliderSecondHandle: HTMLElement;
  public rangeLimits: LimitDataModel = { enabled: true, minStart: 1800, minEnd: 1900, maxStart: 1900, maxEnd: 2020 };

  public rangeValue1: number[] = [10, 20];
  public min1: number = 10;
  public max1: number = 21;
  public rangeLimits1: LimitDataModel = { enabled: true, minStart: 10, minEnd: 19, maxStart: 18, maxEnd: 21 };

  public range: SliderComponent;
  public centuries: SliderComponent;
  public museum_centuries: SliderComponent;
  public gallery_centuries: SliderComponent;
  public years_range: SliderComponent;
  public artist_centuries: SliderComponent;

  public seletedTab: string = 'all';
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
      'id': 1,
      'title': 'Name',
    },
  ];
  status = {
    artwork_type: true,
    country_city: true,
    creation_date: true,
    year_range: true,
    images: true,
    school: true,
    role: true,
    centuries: true,
    movement: true,
    anonymity: true,
    artist: true,
    search_artist: true,
    dimensions: true,
    museum_centuries: true,
    date_duration: true,
    gallery_centuries: true,
    gallery: true,
    event_type: true,
    time: true,
    years_range: true,
    birth_place: true,
    death_place: true,
    nationality: true,
    artist_centuries: true,
  }
  advancedState = true;

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
  labels = [];
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

  schools = [
    {title: 'Select school' , id: 0},
  ]
  selectedSchool = 0;

  roles = [
    {title: 'Select role' , id: 0},
  ]
  selectedRole = 0;

  times = [
    {title: 'Select time' , id: 0},
  ]
  selectedTime = 0;

  durations = [
    {title: 'Select Duration' , id: 0},
  ]
  selectedDuration = 0;

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
    for (let i = 1; i <= 10; i++) {
      this.labels.push(
        { title: 'Label' }
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

  selectSchool() {
    console.log(this.selectedSchool);
  }

  selectRole() {
    console.log(this.selectedRole);
  }

  selectDuration() {
    console.log(this.selectedDuration);
  }

  selectTime() {
    console.log(this.selectedTime);
  }

  setSliderOption(elementId) {
    this.sliderTrack = document.getElementById(elementId).querySelector('.e-range');
    this.sliderFirstHandle = document.getElementById(elementId).querySelector('.e-handle.e-handle-first');
    this.sliderSecondHandle = document.getElementById(elementId).querySelector('.e-handle.e-handle-second');
    (this.sliderFirstHandle as HTMLElement).style.backgroundColor = '#7976ff';
    (this.sliderSecondHandle as HTMLElement).style.backgroundColor = '#7976ff';
    (this.sliderTrack as HTMLElement).style.backgroundColor = '#7976ff';
  }

  onCreated(): void {
    this.setSliderOption('range');
  }

  centuriesCreated(): void {
    this.setSliderOption('centuries');
  }

  centuriesMuseum(): void {
    this.setSliderOption('museum_centuries');
  }

  centuriesGalley(): void {
    this.setSliderOption('gallery_centuries');
  }

  centuriesArtist(): void {
    this.setSliderOption('artist_centuries');
  }

  yearsRange(): void {
    this.setSliderOption('years_range');
  }

  onAdvanced() {
    this.advancedState = !this.advancedState;
  }

}
