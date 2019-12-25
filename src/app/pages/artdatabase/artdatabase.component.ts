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
  totalResults = 0;

  constructor() {
    this.totalResults = 156;
    for (let i = 0; i < this.totalResults; i++) {
      this.artworks.push(
        {title: 'Joel Reynolds'+i}
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

}
