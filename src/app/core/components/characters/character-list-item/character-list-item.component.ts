import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../../../models/character.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-character-list-item',
  templateUrl: './character-list-item.component.html',
  styleUrls: ['./character-list-item.component.scss']
})
export class CharacterListItemComponent implements OnInit {

  @Input() character: Character;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  characterClicked(characterId: number): void {
    this.router.navigate([characterId],  { relativeTo: this.route });
  }

}
