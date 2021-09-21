import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ByIdComponent } from "./movie/pages/by-id/by-id.component";
import { BySearchComponent } from "./movie/pages/by-search/by-search.component";
import { ByTitleComponent } from "./movie/pages/by-title/by-title.component";
import { MovieInfoComponent } from './movie/pages/movie-info/movie-info.component';

const routes : Routes = [
    {
        path: '',
        component: BySearchComponent,
        pathMatch: 'full'
    },
   {
       path: 'byTitle',
       component: ByTitleComponent
   },
   {
       path: 'byId',
       component: ByIdComponent
   },
   {
       path: 'movie/:id',
       component: MovieInfoComponent
   },
   {
       path: '**',
       redirectTo: ''
   }
];

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}