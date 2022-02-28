import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditPersonDialogComponent, IEditPersonDialogInfo } from '../edit-person-dialog/edit-person-dialog.component';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.scss']
})
export class PersonTableComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClickEditPerson(){
    const editPersonDialogInfo: IEditPersonDialogInfo = {
      something: 'hello'
    };
    const dialogRef = this.dialog.open(EditPersonDialogComponent, {
      width: '250px',
      data: editPersonDialogInfo,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ', result);
    });

  }
}
