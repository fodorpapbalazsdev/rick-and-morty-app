import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  why: 'no-character-found';
}

@Component({
  selector: 'app-warning-message-dialog',
  templateUrl: './warning-message-dialog.component.html',
  styleUrls: ['./warning-message-dialog.component.scss']
})
export class WarningMessageDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

}
