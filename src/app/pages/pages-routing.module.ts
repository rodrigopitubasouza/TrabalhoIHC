import { HomePage } from './home/home.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { MoviesPage } from './movies/movies.page';

const routes: Routes = [
  {path: 'home', component: HomePage},
  { path: 'movies', component: MoviesPage },
  // { path: 'movies/:id', loadChildren: './pages/movies-details/movies-details.module#MoviesDetailsPageModule' },
  { path: 'login', component: LoginPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
