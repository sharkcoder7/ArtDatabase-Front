import {Component, OnInit, HostListener, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from "../../services/data.service";
import {AllCommunityModules} from '@ag-grid-community/all-modules';
import {environment} from '../../../environments/environment';

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

  private defaultColDef;
  private paginationPageSize;

  constructor(private dataService: DataService, private route: ActivatedRoute) {

    this.defaultColDef = { sortable: true };
    this.paginationPageSize = 4;
  }

  showLess = true;
  showMoreFlag = false;
  artwork = [];
  artworkImage;
  author = [];
  styles = environment.googleMapStyleVintage;

  columnDefs = [
    {headerName: '#', field: 'number', width: 150  },
    {headerName: 'Possessor', field: 'possessor', width: 250 },
    {headerName: 'Location', field: 'location', width: 250},
    {headerName: 'Date', field: 'date', width: 250},
    {headerName: 'Type', field: 'type', width: 250},
  ];

  rowData = [
    {number: '1', possessor: 'Mark', location: 'Ottawa', date: '08.11.2019', type: 'Donation'},
    {number: '2', possessor: 'Jacob', location: 'Mexico', date: '08.12.2019', type: 'Sale'},
    {number: '3', possessor: 'Larry', location: 'Chicago', date: '11.11.2019', type: 'Movement'},
    {number: '4', possessor: 'Tow', location: 'NY', date: '10.11.2019', type: 'Donation'},
    {number: '5', possessor: 'Mark1', location: 'Ottawa1', date: '08.55.2019', type: 'Donation'},
    {number: '6', possessor: 'Jacob1', location: 'Mexico1', date: '08.12.2019', type: 'Sale'},
    {number: '7', possessor: 'Larry1', location: 'Chicago1', date: '11.11.2019', type: 'Movement'},
    {number: '8', possessor: 'Tow1', location: 'NY1', date: '10.11.2019', type: 'Donation'},
  ];

  modules = AllCommunityModules;

  lat = 40.730610;
  lng = -73.935242;

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
