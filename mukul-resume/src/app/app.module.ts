import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { route } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageModule } from './error-page/error-page.module';
import { MyAppsModule } from './my-apps/my-apps.module';
import { ContactMeModule } from './contact-me/contact-me.module';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { HttpClientModule } from '@angular/common/http';

import {MatFormFieldModule} from '@angular/material/form-field';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
  HeaderComponent,
  AppComponent,
  FooterComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    HttpClientModule,
    ErrorPageModule,
    MyAppsModule,
    ContactMeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule { }
