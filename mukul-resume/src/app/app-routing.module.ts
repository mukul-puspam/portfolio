import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { MyAppsModule } from './my-apps/my-apps.module';
import { ContactMeModule } from './contact-me/contact-me.module';
import { ErrorPageModule } from './error-page/error-page.module';
import { DashboardComponent} from './dashboard/dashboard.component';
import { MyAppsComponent } from './my-apps/my-apps.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ErrorPageComponent } from './error-page/error-page.component';
export const route: Routes = [
  {
    path: 'dashboard',
    // loadChildren: './dashoard/dashboard.module#DashboardModule'
    loadChildren: () => DashboardModule
    // component: DashboardComponent
  },
  {
    path: 'my-apps',
    // loadChildren: 'src/app/my-apps/my-apps.module#MyAppsModule'
    loadChildren: () => MyAppsModule
    // component: MyAppsComponent
  },
  {
    path: 'contact-me',
    // loadChildren: 'src/app/contact-me/contact-me.module#ContactMeModule'
    loadChildren: () => ContactMeModule
    // component: ContactMeComponent
  },
  {
    path: '**',
    // loadChildren: 'src/app/error-page/error-page.module#ErrorPageModule'
    loadChildren: () => ErrorPageModule
    // component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
