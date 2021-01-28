import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {CharacterService} from './character.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterAliveGuardService implements CanActivate {

  constructor(private characterService: CharacterService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
    return new Observable(subscriber => {
      this.characterService.getCharacterById(route.params.id).then((character) => {
        const result = character.status.toLowerCase() !== 'dead';
        subscriber.next(result);
        if (!result) {
          this.router.navigate(['characters']);
        }
      });
    });
  }
}
