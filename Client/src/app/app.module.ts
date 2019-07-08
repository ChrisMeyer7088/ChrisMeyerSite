import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { ContactService } from './services/contact.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { AboutPageComponent } from './page/about-page/about-page.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { WorkExperincePageComponent } from './page/work-experince-page/work-experince-page.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { ContactFormComponentComponent } from './components/contact-form-component/contact-form-component.component';
import { GiftmePageComponent } from './page/projects/giftme-page/giftme-page.component';
import { PointmapPageComponent } from './page/projects/pointmap-page/pointmap-page.component';
import { CmSitePageComponent } from './page/projects/cm-site-page/cm-site-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    NavbarComponentComponent,
    WorkExperincePageComponent,
    FooterComponentComponent,
    ContactFormComponentComponent,
    GiftmePageComponent,
    PointmapPageComponent,
    CmSitePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
