import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/models/task.class';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-add-todolist-dialog',
  templateUrl: './add-todolist-dialog.component.html',
  styleUrls: ['./add-todolist-dialog.component.scss'],
  providers: [StorageService]
})
export class AddTodolistDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddTodolistDialogComponent>,
    private storage: StorageService,
  ) { }

  newTask: Task = new Task();
  id: any;
  allIds: any = [];

  ngOnInit(): void {
    this.allIds = this.storage.loadAllIds();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  /**
   * save a new todo list
   */
  newTodolist() {
    this.id = new Date().getTime();
    this.id.toString();
    let ref = { 'id': this.id, 'headline': this.newTask.headline };
    this.pushRef(ref);
    this.dialogRef.close();
    this.storage.save(this.id, this.newTask);
    this.storage.saveAllIds(this.allIds);
  }

  pushRef(ref: any) {
    if (this.allIds) {
      this.allIds.push(ref);
    }
    else {
      this.allIds = [ref];
    }
  }
}

