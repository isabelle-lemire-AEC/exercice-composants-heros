import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { FormulaireHeroComponent } from '../formulaire-hero/formulaire-hero.component';



@Component({
  selector: 'app-table-heros',
  templateUrl: './table-heros.component.html',
  styleUrls: ['./table-heros.component.css']
})

export class TableHerosComponent implements OnInit {
  dataSourceHeros: MatTableDataSource<Hero> = new MatTableDataSource();// ce qui est entre < > c'est ce qu'on reçoit comme information, donc on reçoit des tableaux de héros
  columnsToDisplay = ['nom', 'actions']; // on indique ici qu'elle colonne ont veut afficher

  @ViewChild(MatTable) tableHeros!: MatTable<Hero>;
  hero: Hero = { nom: '' }; // cette variable doit suivre le composant du formulaire

  /* Pour la pagniation et le tri */
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  
  constructor(
    private heroService: HeroService, 
    private _snackBar: MatSnackBar, 
    public dialog: MatDialog) 
  { }

  ngOnInit(): void {
    this.getHeros()
  }

  openDialog(hero?: Hero) { 
    const dialogRef = this.dialog.open(FormulaireHeroComponent, { // garde une référence dans le dialog
      data: hero,
      });
    
    dialogRef.afterClosed().subscribe(result => { // défini ce qui va se passer une fois le dialog fermer
      if(result) {
      this._snackBar.open(result, undefined, {
        duration: 2000
      });
      this.getHeros();
      }
    });
  }  

  getHeros() { 
    this.heroService.getHeros().subscribe(
      resultat => {
        console.log(resultat);

        /* associer les résultats reçus par l'API à la source de données du tableau */
        this.dataSourceHeros = new MatTableDataSource(resultat);

        /* Pour la pagniation et le tri */
        this.dataSourceHeros.paginator = this.paginator;
        this.dataSourceHeros.sort = this.sort;

        /* générer les résultats du tableau */
        this.tableHeros.renderRows();
      }
    );
  }

  showFormHero(hero: Hero) { // pour faire apparaitre le héro dans le formulaire de modif
      this.hero = hero;
  }
    

  deleteHero(_id: string) { 
    this.heroService.deleteHero(_id).subscribe(_ => { // fait le delete
      this.getHeros(); // une fois que c'Est fait, il met a jour et retourne la lise des heros
      this._snackBar.open("Héro supprimé!", undefined, {
        duration: 2000
      });
      }
    );
  }
    
    
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceHeros.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceHeros.paginator) {
      this.dataSourceHeros.paginator.firstPage();
    }
  }        

}
