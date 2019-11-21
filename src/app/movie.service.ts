import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http :HttpClient) { }
  //get all movies
  getPopularMovies(id:number)
  {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=be2a59123798e4a7312495430f84a944&language=en-US&page=1');
  }
}
