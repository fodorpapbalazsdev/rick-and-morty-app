import {Component, OnInit} from '@angular/core';
import {Character} from '../../models/character.model';
import {CharacterService} from '../../services/character.service';
import {WarningMessageDialogComponent} from '../dialogs/warning-message-dialog/warning-message-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  animations: [
    trigger('elementAppearAnimation', [
      state('disappear', style({
        opacity: 0.0,
      })),
      state('pageAppear', style({
        opacity: 1,
      })),
      transition('disappear => pageAppear', [
        animate('0.7s')
      ]),
      transition('pageAppear => disappear', [
        animate('0.3s')
      ]),
    ]),
    trigger('translateYNegativeAnimation', [
      state('translated', style({
        transform: 'translateY(-50px)',
      })),
      state('notTranslated', style({
        transform: 'translateX(0px)',
      })),
      transition('translated => notTranslated', [
        animate('0.7s')
      ]),
    ]),
    trigger('mouseOverAnimation', [
      state('mouseOver', style({
        transform: 'scale(1.2)',
      })),
      state('mouseLeave', style({
        transform: 'scale(1)',
      })),
      transition('* => *', [
        animate('0.3s')
      ]),
    ]),
  ],
})
export class CharactersComponent implements OnInit {

  characters: Character[];

  infiniteLoop = false;
  infiniteLoopButtonDisabled = this.infiniteLoop;

  filterPatternChangedFlag = false;
  hasNoCharacterMatch = false;
  nameFilterValue = '';
  statusFilterValue = '';

  pageLoaded = false;
  elementToAnimates = [
    {
      elementLoaded: false,
      elementDelay: 200,
    },
    {
      elementLoaded: false,
      elementDelay: 400,
    },
    {
      elementLoaded: false,
      elementDelay: 500,
    },
  ];

  constructor(private route: ActivatedRoute, private characterService: CharacterService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.starterAnimation();
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

  getAppearAnimation(id: number): string {
    return this.elementToAnimates[id].elementLoaded ? 'pageAppear' : 'disappear';
  }

  starterAnimation(): void {
    setTimeout(() => {
      this.pageLoaded = true;
      this.elementToAnimates.forEach(elementToAnimate => {
        setTimeout(() => {
          elementToAnimate.elementLoaded = true;
        }, elementToAnimate.elementDelay);
      });
    }, 100);
  }

  switchListType(): void {
    this.elementToAnimates[2].elementLoaded = false;
    this.infiniteLoopButtonDisabled = !this.infiniteLoopButtonDisabled;
    setTimeout(() => {
      this.infiniteLoop = !this.infiniteLoop;
      this.elementToAnimates[2].elementLoaded = true;
    }, 400);
  }
}
