import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import { style } from '@angular/core/src/animation/dsl';
declare var $:any;

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {

  artworks = [];
  artworksPagination = [];
  artists = [];
  locations = [];
  expanded = false;



  constructor(private dataService: DataService) {
  }

  getArtworks(url?: string) {
    this.dataService.getArtworks(url).subscribe((data: any[]) => {
      this.artworks = data['data'];
      this.artworksPagination = data['links'];
    });
  }

  filteredLocations(search) {
    return this.locations.filter(x => x.name === search)[0];
  }

  getArtworksByLocation(id) {
    this.dataService.getArtworksByLocation(id).subscribe((data: any[]) => {
      this.artworks = data['data'];
      this.artworksPagination = data['links'];
    });
  }

  ngOnInit() {
    this.getArtworks();

    this.dataService.getArtists().subscribe((data: any[]) => {
      this.artists = data['data'];
    });

    this.dataService.getLocations().subscribe((data: any[]) => {
      this.locations = data;
    });
  }

  ngAfterViewInit(){
    $(document).ready(function(){
      $("#sortType").click(function(){
        if(!this.expanded)
        {
          $("#galleryGrid").attr("class","gallery-block show");
          this.expanded = true;
        }
        else
        {
          $("#galleryGrid").attr("class","row gallery-block show");
          this.expanded = false;
        }
      });
    });
}

  myFunc() {
    console.log("function called")
  }



}
