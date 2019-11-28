import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MyCollectionsArtFull, MyCollectionsArts} from "../../core/interfaces/collect";
import {MarketsLine} from "../../core/interfaces/markets-line";
import * as Chart from 'chart.js';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective } from 'ng2-charts';
import {News} from "../../core/interfaces/news";
import {LocalDataSource} from "ng2-smart-table";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  @ViewChild('hotline') hotline: ElementRef;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  public liveMarkets: MarketsLine[];
  public myCollectionsArts: MyCollectionsArts[];
  public lineChartType = 'line';
  public chartPeriodId: number = 0;
  public chartPeriodMarketId: number = 0;
  public lineChartLabels = ['', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  public lineChartOptions = {
    responsive: true,
    legend: {
      display: false
    }
  };
  public lineChartMarketOptions = {
    responsive: false,
    legend: {
      display: false
    }
  };
  public artArr: MyCollectionsArtFull[] = [
    {
      id: 0,
      name: 'The Starry Night',
      author: 'Vincent van Gogh',
      thumb: './assets/imgs/136-collection-smooth.png',
      location: 'Zundert, Netherlands',
      currentVal: 90,
      purchasedPrice: 100,
      DayData: [180, 480, 770, 90, 1000, 270, 400, 180, 480, 770, 90, 234, 270, 400],
      WeekData:  [1, 2, 444, 90, 22, 270, 400, 180, 99, 423, 90, 22, 270, 400],
      MonthData: [180, 480, 770, 90, 1000, 270, 400, 23, 480, 770, 90, 1000, 270, 400],
      ThreeMonthData:  [180, 480, 770, 90, 1000, 270, 400, 180, 480, 770, 90, 1000, 270, 400],
      YearMonthData: [180, 480, 23, 90, 1000, 270, 400, 5, 480, 770, 90, 23, 270, 400],
      AllMonthData:  [180, 5, 770, 90, 1000, 270, 5, 180, 480, 770, 90, 23, 270, 400],
      equity: 76.12,
      cost: 155.50,
      todayReturn: '+$0.28(+0.37%)',
      totalReturn: '+$78.60(-50.63%)',
      averageCost: 11.10,
      shares: 14,
      portfolioDiversity: 14.19,
      cashholdExercise: 0.00,
      about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem earum error expedita labore numquam quaerat! Adipisci nobis quasi repellat.',
      ceo: 'Sujal Shah',
      employees: 43,
      headquarters: 'Newark, California',
      founded: 1988,
      marketCup: '375.11M',
      priceEarningsRatio: null,
      dividendYield: 0.00,
      averageVolume: '702.04K',
      highToday: 5.72,
      lowToday: 5.31,
      openPrice: 5.46,
      volume: '648.77K',
      weekHigh: 14.00,
      weekLow: 4.23
    },
    {
      id: 1,
      name: 'The Starry Night test 2',
      author: 'Vincent van Gogh ss',
      thumb: './assets/imgs/Paul_Gauguin_-_D\'ou_venons-nous.jpg',
      location: 'Zundert, Netherlands',
      currentVal: 90,
      purchasedPrice: 100,
      DayData: [180, 480, 770, 90, 1000, 270, 400, 180, 480, 770, 90, 234, 270, 400],
      WeekData:  [1, 2, 444, 90, 22, 270, 400, 180, 99, 423, 90, 22, 270, 400],
      MonthData: [180, 480, 770, 90, 2, 270, 400, 23, 480, 770, 90, 1000, 270, 400],
      ThreeMonthData:  [180, 480, 770, 90, 1000, 270, 400, 180, 480, 770, 90, 1000, 270, 400],
      YearMonthData: [180, 480, 23, 90, 10, 270, 400, 5, 480, 770, 900, 23, 270, 1],
      AllMonthData:  [180, 5, 770, 90, 1, 270, 5, 180, 480, 770, 90, 23, 270, 400],
      equity: 76.12,
      cost: 155.50,
      todayReturn: '+$0.28(+0.37%)',
      totalReturn: '+$78.60(-50.63%)',
      averageCost: 11.10,
      shares: 14,
      portfolioDiversity: 14.19,
      cashholdExercise: 0.00,
      about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem earum error expedita labore numquam quaerat! Adipisci nobis quasi repellat.',
      ceo: 'Sujal Shah',
      employees: 43,
      headquarters: 'Newark, California',
      founded: 1988,
      marketCup: '375.11M',
      priceEarningsRatio: null,
      dividendYield: 0.00,
      averageVolume: '702.04K',
      highToday: 5.72,
      lowToday: 5.31,
      openPrice: 5.46,
      volume: '648.77K',
      weekHigh: 14.00,
      weekLow: 4.23
    }
  ];
  public selectedArt: MyCollectionsArtFull;
  public chartData:  ChartDataSets[] = [
    {
      data: [], label: '', fill: false
    }
  ];
  public chartMarketsData:  ChartDataSets[] = [
    {
      data: [1, 2, 444, 90, 22, 270, 400, 180, 99, 423, 90, 22, 270, 400], label: ''
    }
  ];
  public news: News[];
  public seletedTab: string = 'home';
  public showMoreGallery = false;
  public settings = {
    columns: {
      id: {
        title: 'ID',
        filter: false
      },
      name: {
        title: 'Full Name',
        filter: false
      },
      username: {
        title: 'User Name',
        filter: false
      },
      email: {
        title: 'Email',
        filter: false
      },
      test: {
        title: 'Test 1',
        filter: false
      },
      tests: {
        title: 'Test 2',
        filter: false
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    attr: {
      class: 'table table-striped'
    }
  };
  public data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      test: 1,
      tests: 1,
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      test: 2,
      tests: 2,
    },
    {
      id: 3,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      test: 3,
      tests: 3,
    },
    {
      id: 4,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      test: 4,
      tests: 4,
    },
  ];
  public source: LocalDataSource;



  constructor() {
    this.source = new LocalDataSource(this.data);
  }

  ngOnInit() {
    this.liveMarkets = [
      {
        name: "CON",
        value: 24232,
        recent: -3.2,
      },
      {
        name: "ARTMKT",
        value: 31020,
        recent: 1.3,
      },
      {
        name: "OLDM",
        value: 15232.23,
        recent: 2.1,
      },
      {
        name: "CON",
        value: 24232,
        recent: -3.2,
      },
      {
        name: "ARTMKT",
        value: 31020,
        recent: 1.3,
      },
      {
        name: "OLDM",
        value: 15232.23,
        recent: 2.1,
      },
      {
        name: "CON",
        value: 24232,
        recent: -3.2,
      },
      {
        name: "ARTMKT",
        value: 31020,
        recent: 1.3,
      },
      {
        name: "OLDM",
        value: 15232.23,
        recent: 2.1,
      },
      {
        name: "CON",
        value: 24232,
        recent: -3.2,
      },
      {
        name: "ARTMKT",
        value: 31020,
        recent: 1.3,
      },
      {
        name: "OLDM",
        value: 15232.23,
        recent: 2.1,
      },
      {
        name: "CON",
        value: 24232,
        recent: -3.2,
      },
      {
        name: "ARTMKT",
        value: 31020,
        recent: 1.3,
      },
      {
        name: "OLDM",
        value: 15232.23,
        recent: 2.1,
      },
      {
        name: "CON",
        value: 24232,
        recent: -3.2,
      },
      {
        name: "ARTMKT",
        value: 31020,
        recent: 1.3,
      },
      {
        name: "OLDM",
        value: 15232.23,
        recent: 2.1,
      },
      {
        name: "CON",
        value: 24232,
        recent: -3.2,
      },
      {
        name: "ARTMKT",
        value: 31020,
        recent: 1.3,
      },
      {
        name: "OLDM",
        value: 15232.23,
        recent: 2.1,
      },
      {
        name: "CON",
        value: 24232,
        recent: -3.2,
      },
      {
        name: "ARTMKT",
        value: 31020,
        recent: 1.3,
      },
      {
        name: "OLDM",
        value: 15232.23,
        recent: 2.1,
      },
      {
        name: "CON",
        value: 24232,
        recent: -3.2,
      },
      {
        name: "ARTMKT",
        value: 31020,
        recent: 1.3,
      },
      {
        name: "OLDM",
        value: 15232.23,
        recent: 2.1,
      },
      {
        name: "CON",
        value: 24232,
        recent: -3.2,
      },
      {
        name: "ARTMKT",
        value: 31020,
        recent: 1.3,
      },
      {
        name: "OLDM",
        value: 15232.23,
        recent: 2.1,
      },
    ];
    this.initHotline();
    this.openDetail(this.artArr[0]);
    this.news = [
      {
        title: 'Lorem ipsum dolor.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
        videolink: './assets/imgs/21.png',
        id:1
      },
      {
        title: 'Lorem ipsum dolor.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
        videolink: './assets/imgs/48.png',
        id:2
      },
      {
        title: 'Lorem ipsum dolor.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
        videolink: './assets/imgs/134.png',
        id:3
      },
    ];
  }

  ngAfterViewInit() {

    var ctx = document.getElementById("MarketValueChart") as HTMLCanvasElement;

    var price = [135850, 52122, 148825, 16939, 9763];
    var works = ['starry', 'portrait', 'musee', 'portrait', 'portrait'];

    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: works,
        datasets: [{
            label: 'Price ',
            data: price,
            fill: false,
            borderColor: 'orange',
            backgroundColor: 'transparent',
            pointBorderColor: 'orange',
            pointBackgroundColor: 'orange',
            pointRadius: 5,
            pointHoverRadius: 10,
            pointHitRadius: 30,
        }]
    },
    });


    var ctx1 = document.getElementById("StatisticOfArtworks") as HTMLCanvasElement;

    var price1 = [135850, 52122, 148825, 16939, 9763];
    var frameworks1 = ['starry', 'portrait', 'musee', 'portrait', 'portrait'];

    var myChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: frameworks1,
        datasets: [{
          label: 'Price ',
          data: price1,
          fill: false,
          borderColor: 'green',
          backgroundColor: 'transparent',
          pointBorderColor: 'green',
          pointBackgroundColor: 'green',
          pointRadius: 5,
          pointHoverRadius: 10,
          pointHitRadius: 30,
        }]
    },
    });

    var ctx2 = document.getElementById("ArtMarket1") as HTMLCanvasElement;

    var price2 = [135850, 52122, 148825, 16939, 9763];
    var frameworks2 = ['starry', 'portrait', 'musee', 'portrait', 'portrait'];

    var myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: frameworks2,
        datasets: [{
          label: 'Price ',
          data: price2,
          fill: false,
          borderColor: 'red',
          backgroundColor: 'transparent',
          pointBorderColor: 'red',
          pointBackgroundColor: 'red',
          pointRadius: 5,
          pointHoverRadius: 10,
          pointHitRadius: 30,
        }]
    },
    });

    var ctx3 = document.getElementById("MarketIndex1") as HTMLCanvasElement;

    var price3 = [135850, 52122, 148825, 16939, 9763];
    var frameworks3 = ['starry', 'portrait', 'musee', 'portrait', 'portrait'];

    var myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: frameworks3,
        datasets: [{
          label: 'Price ',
          data: price3,
          fill: false,
          borderColor: 'blue',
          backgroundColor: 'transparent',
          pointBorderColor: 'blue',
          pointBackgroundColor: 'blue',
          pointRadius: 5,
          pointHoverRadius: 10,
          pointHitRadius: 30,
        }]
    },
    });

  }

  initHotline(): void{
    const elem = this.hotline.nativeElement;
    setInterval(() => {
      elem.style.left = (elem.offsetLeft - 1) + 'px';
      if(Math.abs(elem.offsetLeft) > (elem.clientWidth - (elem.parentElement.clientWidth / 2))){
        elem.style.left = 0 + 'px'
      }
    }, 10);

  }

  checkNumberPositive(numb: number){
    return numb > 0;
  }

  openDetail(art: MyCollectionsArtFull) {
    this.selectedArt = art;
    this.chartData[0].data = this.selectedArt.DayData;
  }

  myCollectionSearch(e) {

  }

  chartPeriod(id: number) {

    this.chartPeriodId = id;
    switch (id) {
      case 0:
        this.chartData = this.selectedArt.DayData;
        break;
      case 1:
        this.chartData = this.selectedArt.WeekData;
        break;
      case 2:
        this.chartData = this.selectedArt.MonthData;
        break;
      case 3:
        this.chartData = this.selectedArt.ThreeMonthData;
        break;
      case 4:
        this.chartData = this.selectedArt.YearMonthData;
        break;
      case 5:
        this.chartData = this.selectedArt.AllMonthData;
        break;

    }
  }

  changeTab(tab: string) {
    this.seletedTab = tab;
  }

  onSearch(query: string = '') {
    this.source.setFilter([
      {
        field: 'id',
        search: query
      },
      {
        field: 'name',
        search: query
      },
      {
        field: 'username',
        search: query
      },
      {
        field: 'email',
        search: query
      }
    ], false);
  }

}
