import { Component, OnInit } from '@angular/core';
//import { HEROS } from '../mock-heros';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  //heros = HEROS;
  heros: Hero[] = []; // on viens chercher le tableau de héros

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeros() // fait appel au service
        .subscribe(resultat => this.heros = resultat); // se souscrit au service et le met dans le tableau hero
  }

}
