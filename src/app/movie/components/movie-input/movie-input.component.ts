import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Movie, MultipleSearch, Search } from '../../interface/movie.interface';
import { movieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-input',
  templateUrl: './movie-input.component.html',
  styles: [
  ]
})
export class MovieInputComponent implements OnInit {

  @Input() placeholder : string = '';
  @Output() onEnter : EventEmitter<string> = new EventEmitter();
  @Output() onDebouncer : EventEmitter<string> = new EventEmitter();
  debouncer : Subject<string> = new Subject;

  term : string = ''

  constructor(
    private movieService : movieService
  ) { }

  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime( 300 )
      )
      .subscribe( value => {
        this.onDebouncer.emit( value );
      });
  }

  pressKey(){
    this.debouncer.next( this.term )
  }

  search(){
    this.onEnter.emit( this.term )
  }

}
