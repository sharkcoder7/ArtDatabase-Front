import { Component, OnInit, ElementRef, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { delay } from 'rxjs/internal/operators';
import { of } from 'rxjs';

import { DynamicComponentService } from './dynamic.component.service';
import { DynamicPageComponent } from './dynamic-page.component';

@Component({
  selector: 'app-museusm-worklist',
  templateUrl: './museum-worklist.component.html',
  styleUrls: ['./museum-worklist.component.scss']
})
export class MusuemWorklistComponent implements OnInit {
  museum;
  artlists;
  pageLoading: boolean;
  lastPage = 0;

  @ViewChild('pages', {read:ViewContainerRef}) vcr: ViewContainerRef;

  constructor(public element: ElementRef, public dcs: DynamicComponentService) {

    this.museum = {
      name: 'Guggenheim',
      city: 'New York'
    };
    this.artlists = [
      {title: 'titel1', url: './assets/imgs/16.png', artist: 'person1', edate: ''},
      {title: 'titel2', url: './assets/imgs/21.png', artist: 'person2', edate: ''},
      {title: 'titel3', url: './assets/imgs/25.png', artist: 'person3', edate: ''},
      {title: 'titel4', url: './assets/imgs/28.png', artist: 'person4', edate: ''},
      {title: 'titel5', url: './assets/imgs/39.png', artist: 'person5', edate: ''},
      {title: 'titel6', url: './assets/imgs/42.png', artist: 'person6', edate: ''},
      {title: 'titel7', url: './assets/imgs/43.png', artist: 'person7', edate: ''},
      {title: 'titel8', url: './assets/imgs/48.png', artist: 'person8', edate: ''},
      {title: 'titel9', url: './assets/imgs/134.png', artist: 'person9', edate: ''},
      {title: 'titel10', url: './assets/imgs/137.png', artist: 'person10', edate: ''},
      {title: 'titel11', url: './assets/imgs/140.png', artist: 'person11', edate: ''},
      {title: 'titel12', url: './assets/imgs/142.png', artist: 'person12', edate: ''},
    ]
  }

  ngOnInit() {
  }

  loadItems(pageNum, limit) {
    let items = this.artlists;
    return of(items);
  }

  addPage(entry, template) {
    if (!this.pageLoading) {
      this.pageLoading = true;
      let compRef = this.dcs.createComponent(DynamicPageComponent, this.vcr);
      let dynPageComp = compRef.instance;
      dynPageComp.template = template;
      dynPageComp.options = {page: this.lastPage};
      this.dcs.insertComponent(compRef);
      this.loadItems(this.lastPage, 50)
      .pipe( delay(2000) )
      .subscribe(items => {
        dynPageComp.items = items;
        this.lastPage++;
        this.pageLoading = false;
      });
    }
  }

}
