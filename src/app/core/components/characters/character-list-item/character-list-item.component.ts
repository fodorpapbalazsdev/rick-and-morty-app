import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../../../models/character.model';
import {ActivatedRoute, Router} from '@angular/router';
import {NotAliveCharacterDialogComponent} from '../../dialogs/not-alive-character-dialog/not-alive-character-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-character-list-item',
  templateUrl: './character-list-item.component.html',
  styleUrls: ['./character-list-item.component.scss']
})
export class CharacterListItemComponent implements OnInit {

  @Input() character: Character;

  constructor(private router: Router, private route: ActivatedRoute, private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  characterClicked(characterId: number): void {
    if (this.character.status.toLowerCase() !== 'alive') {
      this.openDialog();
    } else {
      this.router.navigate([characterId], {relativeTo: this.route});
    }
  }

  openDialog(): void {
    this.dialog.open(NotAliveCharacterDialogComponent, {
      data: {
        from: 'character-list-item'
      }
    });
  }

}
