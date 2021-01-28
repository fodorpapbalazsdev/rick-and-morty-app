import {Component, OnInit} from '@angular/core';
import {Character} from '../../models/character.model';
import {CharacterService} from '../../services/character.service';
import {WarningMessageDialogComponent} from '../dialogs/warning-message-dialog/warning-message-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: Character[];

  infiniteLoop = false;
  filterPatternChangedFlag = false;
  hasNoCharacterMatch = false;
  nameFilterValue = '';
  statusFilterValue = '';

  constructor(private route: ActivatedRoute, private characterService: CharacterService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.characters = this.route.snapshot.data.characters;
  }

  loadCharacters(): void {
    this.filterPatternChangedFlag = true;
    this.characterService.getCharactersByNameAndStatus(this.nameFilterValue, this.statusFilterValue).then(res => {
      this.characters = res;
      this.hasNoCharacterMatch = this.characters.length === 0;
      this.filterPatternChangedFlag = false;
    }).catch(err => {
        this.dialog.open(WarningMessageDialogComponent, {
          data: {
            why: 'no-character-found'
          }
        });
      }
    );
  }

  filterPatternChanged(target: any): void {
    this.nameFilterValue = target.value;
    this.loadCharacters();
  }

  statusFilterChanged(target: any): void {
    this.statusFilterValue = target.value === 'All' ? '' : target.value;
    this.loadCharacters();
  }
}
