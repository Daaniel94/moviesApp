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
  multiplesearch! : MultipleSearch;
  movies! : Search[];
  isErr : boolean = false;

  constructor(
    private movieService : movieService
  ) { }

    search( term : string ){
      this.term = term;
      this.isErr = false;
      this.movieService.searchMovie( this.term )
        .subscribe( (resp) => {
          this.multiplesearch = resp;
          this.movies = this.multiplesearch.Search;
          if( this.multiplesearch.Response === 'False'){
            this.isErr = true;
          }
        }, (err) => {
          this.movies = [] 
          this.isErr = true;
          console.log(err);
        })
    }

}
