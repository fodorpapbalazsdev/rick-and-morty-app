import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../../../../models/character.model';
import {PageConfig} from './page-config';

@Component({
  selector: 'app-character-simple-list',
  templateUrl: './character-simple-list.component.html',
  styleUrls: ['./character-simple-list.component.scss']
})
export class CharacterSimpleListComponent implements OnInit {

  @Input() characters: Character[];

  charactersToList = new Array<Character>();

  pageConfig: PageConfig;

  constructor() {
  }

  ngOnInit(): void {
    this.pageConfig = new PageConfig();
    this.pageConfig.currentPageIndex = 0;
    this.pageConfig.numberOfListedCharacter = 5;
    this.pageDatarefresh();
  }

  pageIndexChanged(target: any): void {
    this.pageConfig.currentPageIndex = +target.value - 1;
    this.pageDatarefresh();
  }

  pageDatarefresh(): void {
    this.pageConfig.numberOfPages = Math.ceil(this.characters.length / this.pageConfig.numberOfListedCharacter);
    this.pageConfig.pageNumbers = Array.from(Array(this.pageConfig.numberOfPages).keys());
    const startIndex = this.pageConfig.currentPageIndex * this.pageConfig.numberOfListedCharacter;
    const endIndex = startIndex + this.pageConfig.numberOfListedCharacter;
    this.charactersToList.splice(0, this.charactersToList.length);
    for (let i = startIndex; i < endIndex; i++) {
      this.charactersToList.push(this.characters[i]);
    }
  }

  prevPage(): void {
    this.pageConfig.currentPageIndex--;
    this.pageDatarefresh();
  }

  nextPage(): void {
    this.pageConfig.currentPageIndex++;
    this.pageDatarefresh();
  }

  numberOdListedCharacterChanged(event: any): void {
    this.pageConfig.currentPageIndex = 0;
    this.pageConfig.numberOfListedCharacter = this.getCorrectNumOfListedCharacter(+event.value);
    event.value = this.pageConfig.numberOfListedCharacter;
    this.pageDatarefresh();
  }

  getCorrectNumOfListedCharacter(value: number): number {
    return this.pageConfig.getCorrectNumOfListedCharacter(value, this.characters.length);
  }
}
