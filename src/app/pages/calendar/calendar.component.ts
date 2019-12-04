import { Component, OnInit, ViewChild, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent, SliderChangeEventArgs } from '@syncfusion/ej2-angular-inputs';
import Popper from 'popper.js';
import { isArray } from 'util';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template
  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  @ViewChild('eventSlider')
  public eventSlider: SliderComponent;
  public value: number = 30;
  public min: number = 0;
  public max: number = 100;
  public type: string = 'MinRange';
  public orientation: string = 'Vertical';
  public sliderTrack: HTMLElement;
  public sliderHandle: HTMLElement;
  public ticks: Object = { placement: 'After', largeStep: 20, smallStep: 5, showSmallTicks: true };
  public tooltip: Object = { isVisible: true, placement: 'Before', showOn: 'Focus' };

  calendarSelectable = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  eventLimit = true;
  calendarEvents: EventInput[] = [];
  allData = [
    { title: 'Awesome Actions', start: new Date(), end: new Date('2019-12-07 15:30:00'), museum: 'Museum 1',id: 'one', tprice: '$120', type: 'action' },
    { title: 'Awesome Lectures', start: new Date(), end: new Date('2019-12-06 15:30:00'), museum: 'Museum 2',id: 'three', tprice: '$120', type: 'lecture' },
    { title: 'Awesome Exhibitions', start: new Date(), end: new Date('2019-12-05 15:30:00'), museum: 'Museum 3',id: 'four', tprice: '$120', type: 'exhibition' },
    { title: 'Awesome Events', start: new Date(), end: new Date('2019-12-04 15:30:00'), museum: 'Museum 4',id: 'five', tprice: '$120', type: 'event' },
    { title: 'Action One', start: new Date('2019-12-01 14:30:00'), end: new Date('2019-12-01 19:30:00'), museum: 'Museum 1', id: 'two', tprice: '$100', type: 'action' },
    { title: 'Lecture One', start: new Date('2019-12-09 14:30:00'), end: new Date('2019-12-14 19:30:00'), museum: 'Museum 2', id: 'six', tprice: '$100', type: 'lecture' },
    { title: 'Exhibition One', start: new Date('2019-12-16 14:30:00'), end: new Date('2019-12-16 19:30:00'), museum: 'Museum 3', id: 'seven', tprice: '$100', type: 'exhibition' },
    { title: 'Event One', start: new Date('2019-12-23 14:30:00'), end: new Date('2019-12-23 19:30:00'), museum: 'Museum 4', id: 'eight', tprice: '$100', type: 'event' }
   ];
  modalData = {
    title: '',
    museum: '',
    start: '',
    end: '',
    tprice: '',
  };
  model = 1;
  viewExhibition = false;
  viewLecture = false;
  viewAction = false;
  viewEvent = false;

  currentFlag = '';
  compareFlag = '';
  compareCounter = 0;
  eventContainer;
  otherContainer;
  mypopper;
  constructor(private modal: NgbModal) { }

  onCreated(): void {
    this.sliderTrack = document.getElementById('minrange').querySelector('.e-range');
    this.sliderHandle = document.getElementById('minrange').querySelector('.e-handle');
    (this.sliderHandle as HTMLElement).style.backgroundColor = 'green';
    (this.sliderTrack as HTMLElement).style.backgroundColor = 'green';
  }

  onChange(args: SliderChangeEventArgs): void {
    if (args.value > 0 && args.value <= 25) {
      (this.sliderHandle as HTMLElement).style.backgroundColor = 'green';
      (this.sliderTrack as HTMLElement).style.backgroundColor = 'green';
    } else if (args.value > 25 && args.value <= 50) {
      (this.sliderHandle as HTMLElement).style.backgroundColor = 'royalblue';
      (this.sliderTrack as HTMLElement).style.backgroundColor = 'royalblue';
    } else if (args.value > 50 && args.value <= 75) {
      (this.sliderHandle as HTMLElement).style.backgroundColor = 'darkorange';
      (this.sliderTrack as HTMLElement).style.backgroundColor = 'darkorange';
    } else if (args.value > 75 && args.value <= 100) {
      (this.sliderHandle as HTMLElement).style.backgroundColor = 'red';
      (this.sliderTrack as HTMLElement).style.backgroundColor = 'red';
    }
  }
  ngOnInit() {
    this.showEvent();
  }

  eventClick(arg): void {
    this.compareFlag = arg.event.id;
    this.eventContainer = arg.jsEvent.path;
    let popper = document.querySelector('#my-popper');
    this.mypopper = new Popper(arg.el, popper, {
      placement: 'auto'
    });
    for (let event in this.calendarEvents) {
      if (this.calendarEvents[event].id == arg.event.id) {
        this.modalData.tprice = this.calendarEvents[event].tprice;
        this.modalData.museum = this.calendarEvents[event].museum;

      }
    }
    this.modalData.title = arg.event.title;
    this.modalData.start = arg.event.start;
    this.modalData.end = arg.event.end;
    if (this.currentFlag != this.compareFlag) {
      document.getElementById('my-popper').style.display = 'block';
      this.currentFlag = this.compareFlag;
      this.compareCounter = 1;
    } else {
      if (this.compareCounter == 1) {
        this.mypopper.destroy();
        document.getElementById('my-popper').style.display = 'none';
        this.compareCounter = 0;
      } else {
        document.getElementById('my-popper').style.display = 'block';
        this.compareCounter = 1;
      }
    }
  }

  onScroll(): void {
    let slider: any = [this.eventSlider];
    slider.forEach((slider: any) => {
        slider.refreshTooltip(slider.tooltipTarget);
    });
  }
  viewExibitions() {
    this.viewExhibition = !this.viewExhibition;
    this.showEvent();
  }
  viewLectures() {
    this.viewLecture = !this.viewLecture;
    this.showEvent();
  }
  viewActions() {
    this.viewAction = !this.viewAction;
    this.showEvent();
  }
  viewEvents() {
    this.viewEvent = !this.viewEvent;
    this.showEvent();
  }
  showEvent() {
    this.calendarEvents = [];
    for (let index in this.allData) {
      if (!this.viewAction && !this.viewEvent && !this.viewExhibition && !this.viewLecture) {
        this.calendarEvents = this.allData;
      } else {
        if(this.viewAction && this.allData[index].type == 'action') {
          this.setCalendarEvent(this.allData[index]);
        }
        if(this.viewEvent && this.allData[index].type == 'event') {
          this.setCalendarEvent(this.allData[index]);
        }
        if(this.viewLecture && this.allData[index].type == 'lecture') {
          this.setCalendarEvent(this.allData[index]);
        }
        if(this.viewExhibition && this.allData[index].type == 'exhibition') {
          this.setCalendarEvent(this.allData[index]);
        }
      }
    }
  }
  setCalendarEvent (rowData) {
    this.calendarEvents = this.calendarEvents.concat({
      title: rowData.title,
      start: rowData.start,
      end: rowData.end,
      id: rowData.id
    });
  }
  clickEvent (event) {
    this.otherContainer = event.path;
    if(isArray(this.eventContainer)) {
      if (this.eventContainer.length != this.otherContainer.length) {
        this.mypopper.destroy();
        document.getElementById('my-popper').style.display = 'none';
      }
    }
  }
}
