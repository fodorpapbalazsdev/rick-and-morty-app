import {Injectable} from '@angular/core';
import {CharacterService} from '../../services/character.service';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Character} from '../../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterDetailResolverService implements Resolve<Character> {

  constructor(private characterService: CharacterService, private dialog: MatDialog) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Character> | Promise<Character> | Character {
    return new Promise(res => {
      this.load(route.params.id).then(data => {
        res(data);
      });
    });
  }

  async load(id: number): Promise<Character> {
    const res = await this.characterService.getCharacterById(id);
    return res;
  }
}
