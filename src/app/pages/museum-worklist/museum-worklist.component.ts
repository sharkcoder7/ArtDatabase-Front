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
      {title: 'David Hockney', url: './assets/imgs/16.png', artist: 'A Bigger Splash', edate: ''},
      {title: 'Edouard Manet', url: './assets/imgs/21.png', artist: 'Boating', edate: ''},
      {title: 'Egon Schiele', url: './assets/imgs/25.png', artist: 'Alt Mühle', edate: ''},
      {title: 'Egon Schiele', url: './assets/imgs/28.png', artist: 'Self-portrait with his head down', edate: ''},
      {title: 'Gustav Klimt', url: './assets/imgs/39.png', artist: 'Portrait of Adele Bloch-Bauer I', edate: ''},
      {title: 'Gustav Klimt', url: './assets/imgs/42.png', artist: 'Water Serpents II', edate: ''},
      {title: 'Gustav Klimt', url: './assets/imgs/43.png', artist: 'Mia and Me', edate: ''},
      {title: 'Henri Rousseau', url: './assets/imgs/48.png', artist: 'Nukkuva mustalaisnainen', edate: ''},
      {title: 'Vincent van Gogh', url: './assets/imgs/134.png', artist: 'Starry Night Over the Rhone', edate: ''},
      {title: 'Vincent van Gogh', url: './assets/imgs/137.png', artist: 'Cafe Terrace at Night', edate: ''},
      {title: 'Vincent van Gogh', url: './assets/imgs/140.png', artist: 'Portrait of Theo van Gogh', edate: ''},
      {title: 'Vincent van Gogh', url: './assets/imgs/142.png', artist: 'Portrait of the Postman Joseph Roulin', edate: ''},
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
