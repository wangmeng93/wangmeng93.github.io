/**
 * Created by 时间煮雨 on 2017/5/20.
 */
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    console.log('article-detail onInit ...');
  }
}
