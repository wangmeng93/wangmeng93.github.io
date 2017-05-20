/**
 * Created by 时间煮雨 on 2017/5/20.
 */
import {NgModule} from '@angular/core';

import {ArticlesRoutes} from './articles-routing.module'
import {ArticlesComponent} from './articles.component';
import {ArticleDetailComponent} from './article-detail/article-detail.component';

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleDetailComponent
  ],
  imports: [
    ArticlesRoutes
  ]
})
export class ArticlesModule {

}
