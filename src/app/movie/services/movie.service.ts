import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie, MultipleSearch, Search } from '../interface/movie.interface';

@Injectable({
    providedIn: 'root'
  })

export class movieService {

  private apiUrl : string = 'http://www.omdbapi.com/?';
  private apiKey : string = '&apikey=e26267d';

  constructor( 
    private http : HttpClient
  ) {}

  searchMovie( arg : string ) : Observable<MultipleSearch>{
    const url = `${ this.apiUrl }s=${ arg }${ this.apiKey }`;
    return this.http.get<MultipleSearch>( url );
  }

}