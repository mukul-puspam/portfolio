import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent} from './error-page.component';
import { RouterModule } from '@angular/router';
import { errorRoute } from './error-routing.module';


@NgModule({
  declarations: [ErrorPageComponent],
  exports: [ErrorPageComponent],
  imports: [
    RouterModule.forChild(errorRoute),
    CommonModule
  ]
})
export class ErrorPageModule { }
