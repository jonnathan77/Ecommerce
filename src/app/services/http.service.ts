import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

    getPokemons(){
      return this.http.get('https://pokeapi.co/api/v2/pokemon')
    }


}
