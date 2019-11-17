import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';


import { DashboardComponent } from './dashboard.component';
import { RouterModule, Route } from '@angular/router';
import { dashboardRoute } from './dashboard-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import { GenericDetailsComponent } from './generic-details/generic-details.component';


@NgModule({
  declarations: [ DashboardComponent, ProjectsComponent, TechnicalSkillsComponent, GenericDetailsComponent],
  exports: [DashboardComponent],
  imports: [
    RouterModule.forChild(dashboardRoute),
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ],
  providers: []
})
export class DashboardModule { }
