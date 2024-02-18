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


  constructor(private heroService: HeroService) { } // fait appel au service Hero

  ngOnInit(): void { // quand le composant est initialisé il viens chercher les heros
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeros() // fait appel au service
        .subscribe(resultat => {
          this.heros = resultat;
          this.heros.forEach(h => {
            h.uneAutrePropriete = "une autre propriété";// s'affiche si jamais c'est vide
          });
        }); // se souscrit au service et le met dans le tableau hero
  }

}
