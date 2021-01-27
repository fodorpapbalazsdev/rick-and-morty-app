import {Component, OnInit} from '@angular/core';
import {Character} from '../../models/character.model';
import {ActivatedRoute, Router} from '@angular/router';
import {CharacterService} from '../../services/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  character: Character;

  constructor(private route: ActivatedRoute, private router: Router, private characterService: CharacterService) {
    this.route.params.subscribe(params => {
      this.loadCharacter(params.id).then((character: Character) => {
        this.character = character;
      });
    });
  }

  ngOnInit(): void {
  }

  backButtonClicked(): void {
    this.router.navigate(['characters']);
  }

  async loadCharacter(id: number): Promise<Character> {
    const character = await this.characterService.getCharacterById(id);
    return new Promise(resolve => {
      resolve(character);
    });
  }

}
