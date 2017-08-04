/**
 * Created by 时间煮雨 on 2017/5/20.
 */
import {Component, OnInit} from '@angular/core';

import {ArticlesService, ArticlesItems} from './shared/articles.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  constructor(private articlesService: ArticlesService) {
  }

  articlesItems: ArticlesItems[];

  ngOnInit() {
    this.articlesService.getArticlesItems()
      .then(articlesItems =>{
        this.articlesItems = articlesItems;
      })
  }
}
