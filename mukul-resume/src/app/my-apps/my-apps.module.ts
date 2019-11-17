import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAppsComponent } from './my-apps.component';
import { RouterModule } from '@angular/router';
import { myAppRoute } from './my-apps-routing.module';


@NgModule({
  declarations: [MyAppsComponent],
  imports: [
    RouterModule.forChild(myAppRoute),
    CommonModule
  ]
})
export class MyAppsModule { }
