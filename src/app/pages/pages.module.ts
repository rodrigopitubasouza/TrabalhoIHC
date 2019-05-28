import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { LoginPage } from './login/login.page';
import { MoviesDetailsPage } from './movies-details/movies-details.page';
import { MoviesPage } from './movies/movies.page';
import { PagesRoutingModule } from './pages-routing.module';
import { HomePage } from './home/home.page';

@NgModule({
  declarations: [LoginPage, MoviesPage, MoviesDetailsPage, HomePage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PagesRoutingModule,
    ReactiveFormsModule
  ]
})
export class PagesModule {}
