import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import {ProblemsComponent} from './problems.component';
import {problemsRoutes} from './problems-routing.module'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(problemsRoutes)
  ],
  declarations: [ProblemsComponent],
})
export class ProblemsModule { }
