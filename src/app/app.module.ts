import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HeroService } from './hero.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { EnteteComponent } from './entete/entete.component';
import { HeroComponent } from './hero/hero.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { PiedPageComponent } from './pied-page/pied-page.component';
import { RechercheComponent } from './recherche/recherche.component';
import { TableHerosComponent } from './table-heros/table-heros.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AccueilComponent } from './accueil/accueil.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    EnteteComponent,
    HeroComponent,
    Page1Component,
    Page2Component,
    PiedPageComponent,
    RechercheComponent,
    TableHerosComponent,
    HeroDetailComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    MatCardModule, 
    MatToolbarModule, 
    MatListModule, 
    MatDividerModule, 
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule //si on veut faire des formulaires. À avoir absolument
    
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
