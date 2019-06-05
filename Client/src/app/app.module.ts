import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { ContactService } from './services/contact.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { WorkExperincePageComponent } from './work-experince-page/work-experince-page.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { ContactFormComponentComponent } from './contact-form-component/contact-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ProjectsPageComponent,
    NavbarComponentComponent,
    WorkExperincePageComponent,
    FooterComponentComponent,
    ContactFormComponentComponent
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
