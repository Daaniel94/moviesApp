import { Component, OnInit } from '@angular/core';
import { movieService } from '../../services/movie.service';
import { Search, MultipleSearch } from '../../interface/movie.interface';

@Component({
  selector: 'app-by-search',
  templateUrl: './by-search.component.html',
  styles: [
  ]
})
export class BySearchComponent {

  term : string = '';
  movies! : MultipleSearch;

  constructor(
    private movieService : movieService
  ) { }

    search( term : string ){
      this.term = term;
      this.movieService.searchMovie( this.term )
        .subscribe( (resp) => {
          console.log(resp);
          this.movies = resp;
          console.log(this.movies.Search);
        }, (err) => {
          this.movies.Search = [] 
        })
    }

}
