import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  TemplateRef
} from '@angular/core';

@Component({
  selector: 'ngui-dyn-page',
  template: `
    <div class="dyn-page contents"
      (nguiInview)="restoreItems()"
      (nguiOutview)="emptyItems()">
      <ng-container
        [ngTemplateOutlet]="template||defaultTemplate"
        [ngTemplateOutletContext]="{items: items, outView: outView}">
      </ng-container>
      <div *ngIf="outView">{{this.itemsBackup.length}} items hidden</div>
    </div>

    <ng-template #defaultTemplate>
      <div *ngIf="items else loading">
        Error: [template] is not given.
      </div>
      <ng-template #loading>Loading...</ng-template>
    </ng-template>
  `,
  styles: [`:host {display: block}`]})
export class DynamicPageComponent {
  @Input('template') template: TemplateRef<any>;
  @Input('items') items;

  options: any;
  outView: boolean = false;
  itemsBackup: any[] = [];
  contentsEl: HTMLElement;

  constructor(public element: ElementRef,public renderer: Renderer2) {}

  restoreItems() {
    if (this.outView) {
      this.outView = false;
      this.items = Array.from(this.itemsBackup || []);
      this.itemsBackup = undefined;
      this.renderer.setStyle(this.contentsEl, 'height', undefined);
    }
  }

  ngOnInit() {
    this.contentsEl =
      this.element.nativeElement.querySelector('.dyn-page.contents');
  }

  emptyItems() {
    if (this.items && !this.outView) {
      let height = this.element.nativeElement.getBoundingClientRect().height;
      this.renderer.setStyle(this.contentsEl, 'height', height+'px');

      this.outView = true;
      this.itemsBackup = Array.from(this.items||[]);
      this.items = undefined;
    }
  }

}

