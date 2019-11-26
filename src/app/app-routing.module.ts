import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {HomeComponent} from './pages/home/home.component';
import {CollectionComponent} from './pages/collection/collection.component';
import {AuthorsComponent} from './pages/authors/authors.component';
import {WorksComponent} from './pages/works/works.component';
import {AboutComponent} from './pages/about/about.component';
import {LocationsComponent} from './pages/locations/locations.component';
import {DatabaseComponent} from './pages/database/database.component';
import {ConditionsComponent} from './pages/conditions/conditions.component';
import { DashbboardComponent } from './pages/dashbboard/dashbboard.component';
import {NewsComponent} from './pages/news/news.component';
import {NewsDetailComponent} from './pages/news-detail/news-detail.component';
import { MuseumsComponent } from './pages/museums/museums.component';
import { CalendarComponent } from './pages';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'collection', component: CollectionComponent},
  {path: 'authors', component: AuthorsComponent},
  {path: 'works/:id', component: WorksComponent},
  {path: 'about', component: AboutComponent},
  {path: 'location', component: LocationsComponent},
  {path: 'database', component: DatabaseComponent},
  {path: 'terms', component: ConditionsComponent},
  {path: 'dashboard', component: DashbboardComponent},
  {path: 'museums', component: MuseumsComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'news', component: NewsComponent},
  {path: 'news/:id', component: NewsDetailComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
