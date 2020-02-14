import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { LoginComponent } from './auth/login/login.component';
 import { SignupComponent } from './auth/signup/signup.component';
import { TheatremoviesComponent } from './theatremovies/theatremovies.component';
 import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './auth/logout/logout.component';


const routes: Routes = [
  {
     path: 'popularmovies', component: MovieComponent 
  },
  {
     path: 'login', component: LoginComponent 
  },
  { 
    path: 'signup', component: SignupComponent 
  },
  {
     path: 'theatremovies', component: TheatremoviesComponent
   },
  { 
    path: 'logout', component: LogoutComponent 
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
