import {Component, Input, OnInit} from '@angular/core';
import {News} from "../../core/interfaces/news";

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Input('data') data: string;
  public news: News;
  constructor() { }

  ngOnInit() {
    this.news = JSON.parse(this.data)
  }

}
