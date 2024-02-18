import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero = {nom:''};
  
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('_id');
    if (id) {
      this.heroService.getHero(id).subscribe((resultat: Hero) => this.hero = resultat);
    } else {
      this.heroService.getHero("65b03f8f487a875341117a04").subscribe((resultat: Hero) => this.hero = resultat);
    }
  }

}