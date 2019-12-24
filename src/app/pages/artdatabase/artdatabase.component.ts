import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-artdatabase',
  templateUrl: './artdatabase.component.html',
  styleUrls: ['./artdatabase.component.scss']
})
export class ArtdatabaseComponent implements OnInit {

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

  constructor() {
    for (let i = 0; i < 15; i++) {
      this.artworks.push(
        {title: 'Artwork'+i}
      )
      this.exhibitions.push(
        {title: 'Exhibition'+i}
      )
      this.galleries.push(
        {title: 'Gallery'+i}
      )
      this.museums.push(
        {title: 'Museum'+i}
      )
    }
  }

  ngOnInit() {
  }

  changeTab(tab: string) {
    this.seletedTab = tab;
    window.scrollTo(0, 0);
  }

  onLocation() {
    console.log(this.selectedLocation);
  }

}
