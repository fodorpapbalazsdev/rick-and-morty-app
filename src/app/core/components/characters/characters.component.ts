import {Component, OnInit} from '@angular/core';
import {Character} from '../../models/character.model';
import {CharacterService} from '../../services/character.service';

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
  errorMessage: string;

  constructor(private characterService: CharacterService) {
  }

  ngOnInit(): void {
    this.characterService.getAllCharacters().then(res => {
      this.characters = res;
    }).catch(err => {
        alert('Error during loading data: ' + err.error.error);
      }
    );;
  }

  unfilterButtonClicked(): void {
    this.characterService.getAllCharacters().then(res => {
      this.characters = res;
    }).catch(err => {
        alert('Error during loading data: ' + err.error.error);
      }
    );;
  }

  filterPatternChanged(target: any): void {
    this.filterPatternChangedFlag = true;
    this.characterService.getCharactersByName(target.value).then(res => {
      this.characters = res;
      this.hasNoCharacterMatch = this.characters.length === 0;
      this.filterPatternChangedFlag = false;
    }).catch(err => {
        alert('Error during filter: ' + err.error.error);
      }
    );
  }
}
