import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAppsComponent } from './my-apps.component';
import { RouterModule } from '@angular/router';
import { myAppRoute } from './my-apps-routing.module';
import {MatCardModule} from '@angular/material/card';


@ NgModule({
  declarations: [MyAppsComponent],
  imports: [
    RouterModule.forChild(myAppRoute),
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    CommonModule
  ]
})
export class MyAppsModule { }
