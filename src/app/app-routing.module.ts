import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './core/components/home/home.component';
import {AboutComponent} from './core/components/about/about.component';
import {CharactersComponent} from './core/components/characters/characters.component';
import {CharacterDetailComponent} from './core/components/character-detail/character-detail.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'characters', component: CharactersComponent},
  {path: 'about', component: AboutComponent},
  {path: 'characters/:id', component: CharacterDetailComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
