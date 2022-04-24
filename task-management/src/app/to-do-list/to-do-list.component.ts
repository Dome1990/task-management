import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Task } from 'src/models/task.class';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
  providers: [StorageService]
})
export class ToDoListComponent implements OnInit {
  constructor(private route: ActivatedRoute, private storage: StorageService) {

  }

  taskId: any;
  allIds: any;
  task: Task = new Task();
  headline: string = 'My To Dos';
  newTodo: string = '';
  addTask: boolean = false;
  newTask: string = '';
  sortedbydate: boolean = false;

  ngOnInit(): void {
    this.route.url.subscribe(params => {
      this.taskId = params[0].path
    })
    this.load();
    this.allIds = this.storage.loadAllIds();
  }

  /**
   * change the status of the task
   * @param i number of the task index
   */
  changeStatus(i: any) {
    let status = this.task.todos[i];
    if (status.status == true) {
      status.status = false;
    }
    else if (status.status == false) {
      status.status = true;
    }
    this.save();
  }

  deleteTask(i: any) {
    this.task.todos.splice(i, 1);
    this.save();
  }

  /**
   * makes the input field for adding new tasks visible
   */
  showAddInput() {
    if (this.addTask == false) {
      this.addTask = true;
    }
    else if (this.addTask == true) {
      this.addTask = false;
    }
  }

  sort() {
    if (this.sortedbydate == true) {
      this.sortedbydate = false;
    }
    else if (this.sortedbydate == false) {
      this.sortedbydate = true;
    }
  }

  addTodo() {
    if (this.newTodo.length > 0) {
      let thisTodo =
      {
        "taskName": this.newTodo,
        "status": true,
      };
      this.task.todos.splice(0, 0, thisTodo)
      this.newTodo = '';
      this.addTask = false;
      this.save();
    }
  }


  load() {
    let loadetTask: any = localStorage.getItem(this.taskId);
    this.task = JSON.parse(loadetTask);
  }


  headlineChange() {
    this.save();
    this.changeIdName();
  }

  changedTask() {
    this.save();
  }

  save() {
    this.storage.save(this.taskId, this.task);
  }

  changeIdName() {
    for (let i = 0; i < this.allIds.length; i++) {
      if (this.allIds[i].id == this.taskId) {
        this.allIds[i].headline = this.task.headline;
        this.storage.saveAllIds(this.allIds);
      }
    }
  }

}
