import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { JeuComponent } from './components/jeu/jeu.component';
import { FormComponent } from './components/form/form.component';
import { BasketComponent } from './components/basket/basket.component';
import { AddPlayerComponent } from './components/basket/add-player/add-player.component';
import { TeamListComponent } from './components/basket/team-list/team-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    JeuComponent,
    FormComponent,
    BasketComponent,
    AddPlayerComponent,
    TeamListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
