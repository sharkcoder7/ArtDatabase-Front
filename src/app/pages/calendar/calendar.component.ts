import { Component, OnInit, ViewChild, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent, SliderChangeEventArgs } from '@syncfusion/ej2-angular-inputs';

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
  calendarEvents: EventInput[] = [
    { title: 'Awesome Exhibition', start: new Date(), end: new Date('2019-11-28 15:30:00'), museum: 'Museum 1',id: 'one', tprice: '$120' },
    { title: 'Exhibition One', start: new Date(), end: new Date('2019-11-28 15:30:00'), museum: 'Museum 2', id: 'two', tprice: '$100' }
  ];
  modalData = {
    title: '',
    museum: '',
    start: '',
    end: '',
    tprice: '',
  };
  model = 1;
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

  }

  eventClick(arg): void {
    console.log(arg);
    for (let event in this.calendarEvents) {
      if (this.calendarEvents[event].id == arg.id) {
        this.modalData.tprice = this.calendarEvents[event].tprice;
        this.modalData.museum = this.calendarEvents[event].museum;

      }
    }
    this.modalData.title = arg.title;
    this.modalData.start = arg.start;
    this.modalData.end = arg.end;
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  onScroll(): void {
    let slider: any = [this.eventSlider];
    slider.forEach((slider: any) => {
        slider.refreshTooltip(slider.tooltipTarget);
    });
  }
}
