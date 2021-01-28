import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {CharacterService} from './character.service';
import {NotAliveCharacterDialogComponent} from '../components/dialogs/not-alive-character-dialog/not-alive-character-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class CharacterAliveGuardService implements CanActivate {

  constructor(private characterService: CharacterService, private router: Router, private dialog: MatDialog) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
    return new Observable(subscriber => {
      this.characterService.getCharacterById(route.params.id).then((character) => {
        const result = character.status.toLowerCase() !== 'dead';
        subscriber.next(result);
        if (!result) {
          this.openDialog();
          this.router.navigate(['characters']);
        }
      });
    });
  }

  openDialog(): void {
    this.dialog.open(NotAliveCharacterDialogComponent, {
      data: {
        from: 'character-alive-guard'
      }
    });
  }
}
