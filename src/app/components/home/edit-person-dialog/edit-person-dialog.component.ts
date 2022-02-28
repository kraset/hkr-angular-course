import { Component, Inject, OnInit } from '@angular/core';

import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface IEditPersonDialogInfo{
  something: string; // something
}

@Component({
  selector: 'app-edit-person-dialog',
  templateUrl: './edit-person-dialog.component.html',
  styleUrls: ['./edit-person-dialog.component.scss']
})
export class EditPersonDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditPersonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editPersonInfo: IEditPersonDialogInfo,
  ) {}

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onSave(): void {
    this.dialogRef.close(true);
  }


}
