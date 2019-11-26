import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {AgmCoreModule} from '@agm/core';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgbModule, NgbModalModule, NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderModule } from '@syncfusion/ej2-angular-inputs';

import {AppComponent} from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {DataService} from './services/data.service';
import {AuthenticationModule} from './shared';

import {
  HeaderComponent,
  FooterComponent
} from './components';

import {
  LoginComponent,
  RegisterComponent,
  HomeComponent,
  CollectionComponent,
  AuthorsComponent,
  WorksComponent,
  AboutComponent,
  LocationsComponent,
  DatabaseComponent,
  ConditionsComponent,
  DashbboardComponent,
  NewsComponent,
  MuseumsComponent,
  CalendarComponent,
  ForgetPasswordComponent,
  ResetPasswordComponent,
  SocialAuthComponent,
  NewsDetailComponent
} from './pages';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CollectionComponent,
    AuthorsComponent,
    WorksComponent,
    AboutComponent,
    LocationsComponent,
    DatabaseComponent,
    ConditionsComponent,
    DashbboardComponent,
    MuseumsComponent,
    NewsComponent,
    NewsDetailComponent,
    CalendarComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    SocialAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthenticationModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    AngularFontAwesomeModule,
    SliderModule,
    NgbModule,
    NgbButtonsModule,
    CarouselModule.forRoot(),
    NgbModalModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAdCdzc_SvwQ0j4xZjl9RI2szAO4jc4toA'
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
