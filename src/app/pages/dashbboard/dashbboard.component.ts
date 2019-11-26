import { Component, OnInit } from '@angular/core';
import Chart = require('chart.js');


@Component({
  selector: 'app-dashbboard',
  templateUrl: './dashbboard.component.html',
  styleUrls: ['./dashbboard.component.scss']
})
export class DashbboardComponent implements OnInit {

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

    var ctx1 = document.getElementById("MarketValueChart1") as HTMLCanvasElement;

    var price1 = [135850, 52122, 148825, 16939, 9763];
    var works1 = ['starry', 'portrait', 'musee', 'portrait', 'portrait'];

    var myChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: works1,
        datasets: [{
            label: 'Price ',
            data: price1,
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

    new Chart(document.getElementById("MarketValueChart2") as HTMLCanvasElement, {
      type: 'doughnut',
      data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [2478,5267,734,784,433]
          }
        ]
      },
      options: {
        title: {
          display: true,
          position: 'bottom',
          text: 'Predicted world population (millions) in 2050',
        },
        legend: {
          display: true,
          position: 'bottom',
        }
      }
  });

  new Chart(document.getElementById("MarketValueChartA") as HTMLCanvasElement, {
    type: 'bar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
      }
    }
});


new Chart(document.getElementById("MarketValueChartA1") as HTMLCanvasElement, {
  type: 'bar',
  data: {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
    }
  }
});





  }


}
