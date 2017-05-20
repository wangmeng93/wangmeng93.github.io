/**
 * Created by 时间煮雨 on 2017/5/20.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ArticlesComponent} from '../articles/articles.component';
import {ArticleDetailComponent} from './article-detail/article-detail.component';

const articlesRoutes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
  }, {
    path: '123456',
    component: ArticleDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(articlesRoutes)],
  exports: [RouterModule]
})

export class ArticlesRoutes {

}
