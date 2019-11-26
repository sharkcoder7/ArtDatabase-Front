import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';

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
} from './pages';
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthenticationModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
