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
}
