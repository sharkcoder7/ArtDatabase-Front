import {Component, OnInit, HostListener, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from "../../services/data.service";

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

  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }
  ngOnInit() {
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





  showMore() {
    this.showMoreFlag = !this.showMoreFlag;
  }

}
