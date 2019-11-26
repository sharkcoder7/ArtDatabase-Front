import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  public currentUrl: string = window.location.href;
  artData;
  artId;
  constructor( private route: ActivatedRoute, private router: Router) {
    this.artData = {
      title: 'Lorem ipsum dolor.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda commodi cupiditate deleniti facilis hic itaque, molestias, numquam obcaecati omnis perspiciatis possimus praesentium provident temporibus tenetur totam vero. Accusamus atque aut consectetur dolorem doloremque doloribus ea eum in laborum molestias optio, provident, quidem reiciendis saepe, sapiente tenetur voluptas. Alias ducimus fuga harum neque nostrum odio repellat reprehenderit suscipit voluptates? Asperiores est, vero! Accusantium exercitationem facilis fuga molestias quisquam! Assumenda aut autem delectus doloremque enim, excepturi impedit iure nostrum officia voluptate.',
      imageUrl: './assets/imgs/21.png',
    }
  }

  ngOnInit() {
    this.artId = this.route.snapshot.paramMap.get('id');
  }

}
