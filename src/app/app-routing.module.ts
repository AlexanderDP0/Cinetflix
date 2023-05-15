import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AgendarComponent } from './agendar/agendar.component';
import { MoviesComponent } from './movies/movies.component';
import { MansoryComponent } from './mansory/mansory.component';
import { FuncionesComponent } from './funciones/funciones.component';

//Rutas del menu
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'agendar', component: AgendarComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'mansory', component: MansoryComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
  { path: 'funciones/:peliculas/:tipo/:idioma', component: FuncionesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
