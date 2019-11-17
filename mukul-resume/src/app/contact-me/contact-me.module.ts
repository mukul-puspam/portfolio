import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeComponent } from './contact-me.component';
import { RouterModule } from '@angular/router';
import { contactRoute } from './contact-routing.module';


@NgModule({
  declarations: [ContactMeComponent],
  exports: [ContactMeComponent],
  imports: [
    RouterModule.forChild(contactRoute),
    CommonModule
  ]
})
export class ContactMeModule { }
