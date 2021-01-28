import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './core/components/home/home.component';
import {NavbarComponent} from './core/components/navbar/navbar.component';
import {FooterComponent} from './core/components/footer/footer.component';
import {CharactersComponent} from './core/components/characters/characters.component';
import {AboutComponent} from './core/components/about/about.component';
import {CharacterSimpleListComponent} from './core/components/characters/character-list/character-simple-list/character-simple-list.component';
import {CharacterInfiniteListComponent} from './core/components/characters/character-list/character-infinite-list/character-infinite-list.component';
import {HttpClientModule} from '@angular/common/http';
import {CharacterListItemComponent} from './core/components/characters/character-list-item/character-list-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import {CharacterDetailComponent} from './core/components/character-detail/character-detail.component';
import { CharacterStatusDirectiveDirective } from './core/components/directives/character-status-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CharactersComponent,
    AboutComponent,
    CharacterSimpleListComponent,
    CharacterInfiniteListComponent,
    CharacterListItemComponent,
    CharacterDetailComponent,
    CharacterStatusDirectiveDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
