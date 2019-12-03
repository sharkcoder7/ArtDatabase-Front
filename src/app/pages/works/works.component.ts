import {Component, OnInit, HostListener, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from "../../services/data.service";



@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class WorksComponent implements OnInit {
  @ViewChild('authorStory') authorStoryElement: ElementRef;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }

  showLess = true;
  showMoreFlag = false;
  artwork = [];
  artworkImage;
  author = [];

  ngOnInit() {
    this.dataService.getArtwork(this.route.snapshot.paramMap.get('id')).subscribe((data: any[]) => {
      console.log(data);
      this.artwork = data['data'];
      this.artworkImage = data['data']['images'][0]['primary'];
      this.author = data['data']['artists'][0];
    });
  }

  onResize(event) {

    if (this.authorStoryElement.nativeElement.offsetHeight >= 95) {
      this.showLess = true;
    } else {
      this.showLess = false;
    }
  }

  showMore() {
    this.showMoreFlag = !this.showMoreFlag;
  }
}
