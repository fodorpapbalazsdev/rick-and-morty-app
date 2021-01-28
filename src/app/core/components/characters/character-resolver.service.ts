import {Injectable} from '@angular/core';
import {Character} from '../../models/character.model';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {CharacterService} from '../../services/character.service';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class CharacterResolverService implements Resolve<Character[]> {

  constructor(private characterService: CharacterService, private dialog: MatDialog) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Character[]> | Promise<Character[]> | Character[] {
    return new Promise(res => {
      this.load().then(data => {
        res(data);
      });
    });
  }

  async load(): Promise<Character[]> {
    const res = await this.characterService.getCharactersByNameAndStatus('', '');
    return res;
  }
}
