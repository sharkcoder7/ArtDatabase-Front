import { Component, OnInit} from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';

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
  ]

  constructor() {
    this.totalResults = 156;
    for (let i = 0; i < this.totalResults; i++) {
      this.artworks.push(
        {artist: 'Vincent van Gogh '+i}
      )
      this.exhibitions.push(
        {title: 'Taipei Fine Arts Museum'+i}
      )
      this.galleries.push(
        {title: 'Taipei Fine Arts Museum'+i}
      )
      this.museums.push(
        {title: 'Taipei Fine Arts Museum'+i}
      )
    }
  }

  ngOnInit() {
  }

  changeTab(tab: string) {
    this.seletedTab = tab;
    this.config.currentPage = 1;
    window.scrollTo(0, 0);
  }

  onLocation() {
    console.log(this.selectedLocation);
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  onSort() {
    console.log(this.selectedSort);
  }

  onCollapse(item) {
    console.log(item);
    this.status[item] = !this.status[item];
  }

}
