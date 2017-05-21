import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';

import {RouterModule} from '@angular/router';

import {contactRoutes} from './contact-routing.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(contactRoutes)
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }

