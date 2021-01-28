import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  from: 'character-list-item' | 'character-alive-guard';
}

@Component({
  selector: 'app-not-alive-character-dialog',
  templateUrl: './not-alive-character-dialog.component.html',
  styleUrls: ['./not-alive-character-dialog.component.scss']
})
export class NotAliveCharacterDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }
}
