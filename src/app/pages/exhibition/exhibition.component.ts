import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from "../../services/data.service";
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-exhibition',
  templateUrl: './exhibition.component.html',
  styleUrls: ['./exhibition.component.scss']
})

export class ExhibitionComponent implements OnInit {

  exhibition;
  artworks = [];
  artworksPagination = [];
  styles = environment.googleMapStyleVintage;

  lat = 40.730610;
  lng = -73.935242;

  constructor(private dataService: DataService, private route: ActivatedRoute) { 

    this.exhibition = {
      exhibition_id: 1,
      gallery_id: 1,
      title: 'New York',
      image_url: 'a',
      address: 'b',
      start_date: 'c',
      end_date: 'd',
      location_id: 1
    }
  }

  ngOnInit() {
    this.getArtworks();
  }

  getArtworks(url?: string) {
    this.dataService.getArtworks(url).subscribe((data: any[]) => {
      this.artworks = data['data'];
      this.artworksPagination = data['links'];
    });
  }

}
