import {Component, OnInit, HostListener, ElementRef, ViewChild} from '@angular/core';

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

  constructor() { }

  ngOnInit() {

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
