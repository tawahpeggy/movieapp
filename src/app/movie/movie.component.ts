import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  popularmovie:any=[];
  serverElement=[];
  newServerName:string ;
  addPopularMovie:boolean=false;
  public image:string = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
  newServerContent;
  constructor(private movieService: MovieService) { 
//this function is timer that counts till an action is completed
setTimeout(() => {
      this.addPopularMovie=true;
    },2000);
  }
// addpopularmovies(){
//   this.serverElement.push({
//   type:'server' , 
//   name: this.newServerName,
//   content:this.newServerContent
//   })
// }
  ngOnInit() {
    //  get all popular movies
this.movieService.getPopularMovies(this.popularmovie).subscribe ((resdata:any) =>{
  this.popularmovie = resdata.results;
  console.log(resdata);
  
  });
}
}