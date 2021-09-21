import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BySearchComponent } from './pages/by-search/by-search.component';
import { ByIdComponent } from './pages/by-id/by-id.component';
import { ByTitleComponent } from './pages/by-title/by-title.component';
import { MovieInfoComponent } from './pages/movie-info/movie-info.component';
import { MovieInputComponent } from './components/movie-input/movie-input.component';
import { MovieTableComponent } from './components/movie-table/movie-table.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BySearchComponent,
    ByIdComponent,
    ByTitleComponent,
    MovieInfoComponent,
    MovieInputComponent,
    MovieTableComponent
  ],
  exports: [
    BySearchComponent,
    ByIdComponent,
    MovieInfoComponent,
    ByTitleComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MovieModule { }
