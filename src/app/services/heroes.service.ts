import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesURL = 'https://heroesapp-98982.firebaseio.com/heroes.json';
  heroeURL = 'https://heroesapp-98982.firebaseio.com/heroes/';

  constructor( private http: HttpClient ) { }

  nuevoHeroe( heroe: Heroe ) {

    const body = JSON.stringify( heroe );
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.heroesURL, body, { headers } )
            .pipe( map( data => {
              console.log(data);
              return data;
            }));

  }

  actualizarHeroe( heroe: Heroe, key$: string ) {

    const body = JSON.stringify( heroe );
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const url = `${ this.heroeURL }/${ key$ }.json`;

    return this.http.put( url, body, { headers } )
            .pipe( map( data => {
              console.log(data);
              return data;
            }));

  }

  getHeroe( key$: string ) {

    const url = `${ this.heroeURL }/${ key$ }.json`;

    return this.http.get( url );

  }

  getHeroes() {

    return this.http.get( this.heroesURL );

  }

  borrarHeroe( key$: string ) {

    const url = `${ this.heroeURL }/${ key$ }.json`;

    return this.http.delete( url );

  }
}
