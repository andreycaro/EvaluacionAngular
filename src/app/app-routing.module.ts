import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { MovieComponent } from './Movie/movie/movie.component';
import { RegisterComponent } from './Register/register/register.component';
import { ReservationComponent } from './Reservation/reservation/reservation.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: MovieComponent },
  { path: 'registre', component: RegisterComponent },
  { path: 'reservation', component: ReservationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
