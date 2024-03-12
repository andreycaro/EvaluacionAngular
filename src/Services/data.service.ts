import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    private apiUrl = 'https://ghibliapi.vercel.app/films';
  private localStorageKey = 'movies';

  constructor(private http: HttpClient) {}

  

  getMovies(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  saveMoviesToLocal(movies: any[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(movies));
  }

  getMoviesFromLocal(): any[] {
    const moviesString = localStorage.getItem(this.localStorageKey);
    return moviesString ? JSON.parse(moviesString) : [];

    
  }

  private Lismovies=[
    {
    name:'Intensamente 2',
     Estreno:'25-05-2024',
     genero:'Infantil',
     image:'src/assets/images/Intensamente 2.jpg'
   },
   {
    name:'Jumanji',
     Estreno:'25-03-2024',
     genero:'Accion y comedia',
     image:'src/assets/images/Jumaji.jpg'
   },
   {
    name:'Avengers',
     Estreno:'25-04-2024',
     genero:'Accion',
     image:'src/assets/images/Avengers.jpg'
   },

   {
    name:'Deapool 3',
     Estreno:'25-03-2024',
     genero:'Accion y comedia',
     image:'deadpool-3.webp'
   },
   {
    name:'El Justiciero 3',
     Estreno:'25-04-2024',
     genero:'Drama y Accion',
     image:'src/assets/images/El Justiciero.jpg'
   }
  
  ];


   
       get movies(){
          return this.Lismovies;
        }

}
