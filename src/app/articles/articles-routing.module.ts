/**
 * Created by 时间煮雨 on 2017/5/20.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ArticleDetailComponent } from './article-detail/article-detail.component';

const articlesRoutes: Routes = [
  {path: '123456', component: ArticleDetailComponent},
  // {path: ':articleId', component: ArticleDetailComponent},
  {path: '', redirectTo: 'articles', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(articlesRoutes)],
  exports: [RouterModule]
})

export class ArticlesRoutes {

}
