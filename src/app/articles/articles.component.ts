/**
 * Created by 时间煮雨 on 2017/5/20.
 */
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    console.log('articles onInit ...');
  }
}
