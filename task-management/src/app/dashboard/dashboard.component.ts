import { Component, OnInit } from '@angular/core';
import { Task } from 'src/models/task.class';
import { AddTodolistDialogComponent } from '../add-todolist-dialog/add-todolist-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StorageService } from '../storage.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [StorageService]
})
export class DashboardComponent implements OnInit {

  allIds: any;

  constructor(public dialog: MatDialog, private storage: StorageService) { }

  ngOnInit(): void {
    this.allIds = this.storage.loadAllIds();
  }

  /**
   * open a dialog to add a new todo list
   */
  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddTodolistDialogComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.allIds = this.storage.loadAllIds();
    });
  }

}
