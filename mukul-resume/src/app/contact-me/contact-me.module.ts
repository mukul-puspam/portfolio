import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeComponent } from './contact-me.component';
import { RouterModule } from '@angular/router';
import { contactRoute } from './contact-routing.module';

import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [ContactMeComponent],
  exports: [ContactMeComponent],
  imports: [
    RouterModule.forChild(contactRoute),
    MatTabsModule,
    MatCardModule,
    CommonModule
  ]
})
export class ContactMeModule { }
