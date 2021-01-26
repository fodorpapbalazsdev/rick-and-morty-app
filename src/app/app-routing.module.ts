import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './core/components/home/home.component';
import {AboutComponent} from './core/components/about/about.component';
import {CharactersComponent} from './core/components/characters/characters.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'characters', component: CharactersComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
