// le service est celui qui communique avec l'API

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from './hero';
import { Observable } from 'rxjs';

const httpOptions = { // on le fait une fois qu'on est prêt a faire l'ajout modif suppression. Ça dit à nos API d'ajuster ça a du JSON et non du html
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  //getHero(arg0: string) {
  //  throw new Error('Method not implemented.');
  //}
  
  API_URL = 'https://heros-vjc9.onrender.com/api/heros';

  constructor(private http: HttpClient) { }

  getHeros(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.API_URL);  //on utilise ici GET
  }

  getHero(id: string): Observable<Hero> {
    const url = `${this.API_URL}/${id}`;
    return this.http.get<Hero>(url);
  }

  addHero(hero:Hero): Observable<void> { // le composant qui me demande l'ajout va devoir me fournir un hero valide et moi ce que je retourne en ce moment c'est rien
    return this.http.post<void>(this.API_URL, hero, httpOptions); // on utilise ici POST
    // this.API_URL > on envoie l'url, hero > notre hero et httpOptions >on lui dit que C'est du JSON
    // si pas valide, ne fait pas le traitement.
  }

  updateHero(hero:Hero): Observable<void> {
    return this.http.put<void>(`${this.API_URL}/${hero._id}`, hero, httpOptions); // on utilise ici PUT
  }

  deleteHero(_id: string): Observable<void> { // besoin d'un id
    return this.http.delete<void>(`${this.API_URL}/${_id}`); // je viens construire mon url (`${this.API_URL}/${_id}`) on utilise DELETE
  }  

}
