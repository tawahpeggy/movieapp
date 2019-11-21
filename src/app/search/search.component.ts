import { Component, OnInit } from '@angular/core';
import { NgForm , FormControl,FormGroup} from '@angular/forms';
import { MovieService} from '../movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
onSubmit(search :NgForm){
  console.log(search.value);
}
  ngOnInit() {
  }

}
