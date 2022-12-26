import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    FaceSnapListComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    SingleFaceSnapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    { 
      provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
 }
