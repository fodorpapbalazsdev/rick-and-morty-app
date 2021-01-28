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
      this.characterService.getCharacterById(params.id).then((character: Character) => {
        this.character = character;
        console.log(character);
      });
    });
  }

  ngOnInit(): void {
  }

  backButtonClicked(): void {
    this.router.navigate(['characters']);
  }

}
