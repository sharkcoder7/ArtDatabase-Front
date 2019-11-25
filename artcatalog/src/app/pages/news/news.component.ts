import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news;
  constructor() {
    this.news = [
      {
        title: 'Lorem ipsum dolor.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dignissimos distinctio ducimus fugit natus odio quo! Consequuntur laboriosam obcaecati quidem....',
        videolink: './assets/imgs/21.png',
        id:1
      },
      {
        title: 'Lorem ipsum dolor.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dignissimos distinctio ducimus fugit natus odio quo! Consequuntur laboriosam obcaecati quidem....',
        videolink: './assets/imgs/48.png',
        id:2
      },
      {
        title: 'Lorem ipsum dolor.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dignissimos distinctio ducimus fugit natus odio quo! Consequuntur laboriosam obcaecati quidem....',
        videolink: './assets/imgs/134.png',
        id:3
      },
    ]
  }

  ngOnInit() {
  }

}
