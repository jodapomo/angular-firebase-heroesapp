import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any;
  loading = true;

  constructor( private _heroesService: HeroesService ) {

    this._heroesService.getHeroes()
      .subscribe( ( data: any ) => {
        this.heroes = data;
        this.loading = false;
      });

  }

  ngOnInit() {
  }

  borrarHeroe( key$: string ) {
    this._heroesService.borrarHeroe( key$ ).subscribe( res => {
      if ( res ) {
        console.log(res);
      } else {
        // todo bien
        delete this.heroes[key$];
      }
    });
  }

}
