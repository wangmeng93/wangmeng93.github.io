/**
 * Created by 时间煮雨 on 2017/5/20.
 */
import {NgModule} from '@angular/core';

import {ShareModule} from '../share/share.module';
import {ArticlesRoutes} from './articles-routing.module'
import {ArticlesComponent} from './articles.component';
import {ArticleDetailComponent} from './article-detail/article-detail.component';

import {ArticlesService} from './shared/articles.service';
@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleDetailComponent
  ],
  imports: [
    ShareModule,
    ArticlesRoutes
  ],
  providers:[ArticlesService]
})
export class ArticlesModule {

}
