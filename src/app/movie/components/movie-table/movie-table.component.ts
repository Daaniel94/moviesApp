import { Component, Input, OnInit } from '@angular/core';
import { Search } from '../../interface/movie.interface';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styles: [
  ]
})
export class MovieTableComponent{

  @Input()
  movies : Search[] = [];

}
