import {Component, OnInit, HostListener, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from "../../services/data.service";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {environment} from '../../../environments/environment';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})

export class AuthorsComponent implements OnInit {
  @ViewChild('authorStory') authorStoryElement: ElementRef;

  showLess = true;
  showMoreGallery = false;
  showMoreFlag = false;
  author = [];
  artworks = [];
  artworksPagination = [];
  exhibitions = [];
  styles = environment.googleMapStyleVintage;

  lat = 40.730610;
  lng = -73.935242;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getArtworks();
    this.getExhibitions(this.route.snapshot.paramMap.get('idAuthor'));
    
    this.dataService.getArtist(this.route.snapshot.paramMap.get('id')).subscribe((data: any[]) => {
      console.log(data);
      this.author = data['data'];
    });
  }

  onResize(event) {

    if (this.authorStoryElement.nativeElement.offsetHeight >= 144) {
      this.showLess = true;
    } else {
      this.showLess = false;
    }
  }

  viewAllGallery() {
   this.showMoreGallery = !this.showMoreGallery;
  }

  getArtworks(url?: string) {
    this.dataService.getArtworks(url).subscribe((data: any[]) => {
      this.artworks = data['data'];
      this.artworksPagination = data['links'];
    });
  }

  getExhibitions(idAuthor){
    this.exhibitions = [
      {
        title: 'Serial Classic',
        description: 'Exhibition ‘Serial Classic’',
        imageLink: './assets/imgs/exhibition1.jpg',
        id: 1
      },
      {
        title: 'PichiAvo',
        description: 'Classic art and sculpture meets graffiti ',
        imageLink: './assets/imgs/exhibition2.jpg',
        id: 2
      },
      {
        title: 'MADSAKI',
        description: 'MADSAKI reveals that the',
        imageLink: './assets/imgs/exhibition1.jpg',
        id: 3
      },
      {
        title: 'Exhibition 4',
        description: 'Exhibition 1 description',
        imageLink: './assets/imgs/exhibition4.jpg',
        id: 4
      }
    ];
   
  }

  showMore() {
    this.showMoreFlag = !this.showMoreFlag;
  }

}
