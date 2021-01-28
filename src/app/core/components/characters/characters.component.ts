import {Component, OnInit} from '@angular/core';
import {Character} from '../../models/character.model';
import {CharacterService} from '../../services/character.service';
import {WarningMessageDialogComponent} from '../dialogs/warning-message-dialog/warning-message-dialog.component';
import {MatDialog} from '@angular/material/dialog';

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

  constructor(private characterService: CharacterService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loadAllCharacters();
  }

  unfilterButtonClicked(): void {
    this.loadAllCharacters();
  }

  filterPatternChanged(target: any): void {
    this.filterPatternChangedFlag = true;
    this.characterService.getCharactersByName(target.value).then(res => {
      this.characters = res;
      this.hasNoCharacterMatch = this.characters.length === 0;
      this.filterPatternChangedFlag = false;
    }).catch(err => {
        this.dialog.open(WarningMessageDialogComponent, {
          data: {
            why: 'character-filter-by-name-not-found'
          }
        });
      }
    );
  }

  private loadAllCharacters() {
    this.characterService.getAllCharacters().then(res => {
      this.characters = res;
    }).catch(err => {
        this.dialog.open(WarningMessageDialogComponent, {
          data: {
            why: 'character-loading'
          }
        });
      }
    );
  }
}
