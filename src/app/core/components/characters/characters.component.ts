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

  constructor(private characterService: CharacterService) {
  }

  ngOnInit(): void {
    this.characterService.getCharacters().then(res => {
      this.characters = res;
    });
  }
}
