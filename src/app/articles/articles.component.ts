/**
 * Created by 时间煮雨 on 2017/5/20.
 */
import {Component, OnInit} from '@angular/core';

import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {ArticlesService, ArticlesItems,Items} from './shared/articles.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  constructor(private articlesService: ArticlesService,
              private domSanitizer: DomSanitizer) {
  }

  articlesItems: ArticlesItems[];

  ngOnInit() {
    this.articlesService.getArticlesItems()
      .then(articlesItems => {
        this.articlesItems = articlesItems;
      });


    // this.articlesService.getArticles().subscribe(items =>{
    //   this.items = items;
    //   console.log(this.items);
    // })
  }
}
