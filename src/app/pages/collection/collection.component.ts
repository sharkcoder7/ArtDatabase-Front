import { Component, OnInit } from '@angular/core';
import Chart = require('chart.js');

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  showMoreGallery = false;

  constructor() { }

  ngOnInit() {

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

}
