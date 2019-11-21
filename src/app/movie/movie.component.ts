import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  popularmovie:any=[];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    //  get all popular movies
this.movieService.getPopularMovies(this.popularmovie).subscribe ((resdata:any) =>{
  this.popularmovie = resdata.results;
  console.log(resdata);
  
  });
}
}