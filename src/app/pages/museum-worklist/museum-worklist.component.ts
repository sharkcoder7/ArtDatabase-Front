import { Component, OnInit, ElementRef, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { delay } from 'rxjs/internal/operators';
import { of } from 'rxjs';
import { Masonry, MasonryGridItem } from 'ng-masonry-grid';

import { DynamicComponentService } from './dynamic.component.service';
import { DynamicPageComponent } from './dynamic-page.component';

@Component({
  selector: 'app-museusm-worklist',
  templateUrl: './museum-worklist.component.html',
  styleUrls: ['./museum-worklist.component.scss']
})
export class MusuemWorklistComponent implements OnInit {
  _masonry: Masonry;
  count = 0;
  showMasonry = true;
  animOptions = { animationEffect: 'effect-1' };
  masonryItems: Array<any> = [];

  museum;
  artlists;
  pageLoading: boolean;
  lastPage = 0;
  limit = 0;

  @ViewChild('pages', {read:ViewContainerRef}) vcr: ViewContainerRef;

  constructor(public element: ElementRef, public dcs: DynamicComponentService) {

    this.museum = {
      name: 'Guggenheim',
      city: 'New York'
    };
    this.artlists = [
      {artist: 'David Hockney', url: './assets/imgs/16.png', title: 'A Bigger Splash', edate: ''},
      {artist: 'Edouard Manet', url: './assets/imgs/21.png', title: 'Boating', edate: ''},
      {artist: 'Egon Schiele', url: './assets/imgs/25.png', title: 'Alt Mühle', edate: ''},
      {artist: 'Egon Schiele', url: './assets/imgs/28.png', title: 'Self-portrait with his head down', edate: ''},
      {artist: 'Gustav Klimt', url: './assets/imgs/39.png', title: 'Portrait of Adele Bloch-Bauer I', edate: ''},
      {artist: 'Gustav Klimt', url: './assets/imgs/42.png', title: 'Water Serpents II', edate: ''},
      {artist: 'Gustav Klimt', url: './assets/imgs/43.png', title: 'Mia and Me', edate: ''},
      {artist: 'Henri Rousseau', url: './assets/imgs/48.png', title: 'Nukkuva mustalaisnainen', edate: ''},
      {artist: 'Vincent van Gogh', url: './assets/imgs/134.png', title: 'Starry Night Over the Rhone', edate: ''},
      {artist: 'Vincent van Gogh', url: './assets/imgs/134.png', title: 'Starry Night Over the Rhone', edate: ''},
      {artist: 'Vincent van Gogh', url: './assets/imgs/137.png', title: 'Cafe Terrace at Night', edate: ''},
      {artist: 'Vincent van Gogh', url: './assets/imgs/137.png', title: 'Cafe Terrace at Night', edate: ''},
      {artist: 'Vincent van Gogh', url: './assets/imgs/140.png', title: 'Portrait of Theo van Gogh', edate: ''},
      {artist: 'Vincent van Gogh', url: './assets/imgs/140.png', title: 'Portrait of Theo van Gogh', edate: ''},
      {artist: 'Vincent van Gogh', url: './assets/imgs/142.png', title: 'Portrait of the Postman Joseph Roulin', edate: ''},
    ];
  }

  ngOnInit() {
  }

  loadItems(pageNum, limit) {
    this.limit = limit;
    let items = [];
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
      this.loadItems(this.lastPage, 15)
      .pipe( delay(2000) )
      .subscribe(items => {
        for (let i = 0; i < this.limit; i++) {
          this.masonryItems.push({ src: this.artlists[i].url, count: this.count++, artist: this.artlists[i].artist, title: this.artlists[i].title});
        }
        dynPageComp.items = items;
        this.pageLoading = false;
      });
    }
  }

  onNgMasonryInit($event: Masonry) {
    this._masonry = $event;
  }

  showDetail(index) {
    console.log(index);
  }
}
