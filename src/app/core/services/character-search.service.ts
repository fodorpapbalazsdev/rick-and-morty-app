import {Injectable} from '@angular/core';
import {Character} from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterSearchService {

  constructor() {
  }

  getMatchedCharacters(pattern: string, characters: Character[]): Character[] {
    const matchedCharacters = new Array();
    characters.forEach(character => {
      if (character.name.toLowerCase().includes(pattern.toLowerCase())) {
        matchedCharacters.push(character);
      }
    });
    return matchedCharacters;
  }
}
