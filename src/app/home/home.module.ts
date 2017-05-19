import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';

import {homeRoutes} from './home.routes';
@NgModule({

  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,

    RouterModule.forChild(homeRoutes)
  ]
})
export class HomeModule {
}
