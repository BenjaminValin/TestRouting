import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { JeuComponent } from './components/jeu/jeu.component';
import { FormComponent } from './components/form/form.component';
import { BasketComponent } from './components/basket/basket.component';

const routes: Routes = [
  {path:'navigation', component: NavComponent},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'jeu', component: JeuComponent},
  {path:'form', component: FormComponent},
  {path:'basket', component: BasketComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
