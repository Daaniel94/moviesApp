import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BySearchComponent } from './pages/by-search/by-search.component';
import { ByIdComponent } from './pages/by-id/by-id.component';
import { ByTitleComponent } from './pages/by-title/by-title.component';
import { MovieInfoComponent } from './pages/movie-info/movie-info.component';



@NgModule({
  declarations: [
    BySearchComponent,
    ByIdComponent,
    ByTitleComponent,
    MovieInfoComponent
  ],
  exports: [
    BySearchComponent,
    ByIdComponent,
    MovieInfoComponent,
    ByTitleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MovieModule { }
