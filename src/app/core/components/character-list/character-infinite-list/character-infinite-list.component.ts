import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../../../models/character.model';

@Component({
  selector: 'app-character-infinite-list',
  templateUrl: './character-infinite-list.component.html',
  styleUrls: ['./character-infinite-list.component.scss']
})
export class CharacterInfiniteListComponent implements OnInit {

  @Input() characters: Character[];

  constructor() {
  }

  ngOnInit(): void {
  }
}
