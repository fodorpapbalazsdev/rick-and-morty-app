import {Component, OnInit} from '@angular/core';
import {Character} from '../../models/character.model';
import {CharacterService} from '../../services/character.service';
import {CharacterSearchService} from '../../services/character-search.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: Character[];

  infiniteLoop = true;
  filterPatternChangedFlag = false;
  hasNoCharacterMatch = false;

  constructor(private characterService: CharacterService, private characterSearchService: CharacterSearchService) {
  }

  ngOnInit(): void {
    this.characterService.getCharacters().then(res => {
      this.characters = res;
    });
  }

  unfilterButtonClicked(): void {
    this.characterService.getCharacters().then(res => {
      this.characters = res;
    });
  }

  filterPatternChanged(target: any): void {
    this.filterPatternChangedFlag = true;
    this.characterService.getCharacters().then(res => {
      this.characters = this.characterSearchService.getMatchedCharacters(target.value, res);
      this.hasNoCharacterMatch = this.characters.length === 0;
      this.filterPatternChangedFlag = false;
    });
  }
}
