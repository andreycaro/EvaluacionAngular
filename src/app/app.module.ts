import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header/header.component';
import { ReservationComponent } from './Reservation/reservation/reservation.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './Footer/footer/footer.component';
import { LoaderComponent } from './Loader/loader/loader.component';


import { LoginComponent } from './Login/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './Register/register/register.component';
import { Routes } from '@angular/router';
import { ReservListComponent } from './List-Reserv/reserv-list/reserv-list.component';
import { MovieComponent } from './Movie/movie/movie.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReservationComponent,
    ReservationComponent,
    LoginComponent,
    MovieComponent,
    FooterComponent,
    LoaderComponent,
    RegisterComponent,
    RegisterComponent,
    ReservListComponent,
    MovieComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CUSTOM_ELEMENTS_SCHEMA
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }