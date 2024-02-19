import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-formulaire-hero',
  templateUrl: './formulaire-hero.component.html',
  styleUrls: ['./formulaire-hero.component.css']
})
export class FormulaireHeroComponent implements OnInit {
  
  hero: Hero = { nom: '' }; // cette variable doit suivre le composant du formulaire

  constructor(
    private heroService: HeroService,
    public dialogRef: MatDialogRef<FormulaireHeroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hero) { 
      if (data) { 
        this.hero = data;
      }  
    }

  ngOnInit(): void {
  }

  addHero(heroForm: NgForm) { 
    if (heroForm.valid) { 
      this.heroService.addHero(this.hero).subscribe(_ => { // si on ne réutilise pas le résultat on met un underscore
            heroForm.resetForm(); //réinitialise le formulaire
            //this.getHeros(); // met a jour et va chercher la liste des heros
            this.dialogRef.close('Héro ajouté!'); // ferme le dialog quand l'action est faite
      });
    }
  }

  updateHero(heroForm: NgForm) {
    if (heroForm.valid) { // vérifie si c'est valide
      this.heroService.updateHero(this.hero).subscribe(_ => { // appelle la méthode de update dans mes services et fait le update
        heroForm.resetForm(); // reset la liste
        //this.getHeros(); // va chercher les héros
        this.dialogRef.close('Héro modifié!'); // ferme le dialog quand l'action est faite
      });
    }
  }

  showFormHero(hero: Hero) { // pour faire apparaitre le héro dans le formulaire de modif
    this.hero = hero;
  }

  annuler() { 
    this.dialogRef.close();
  }

}
