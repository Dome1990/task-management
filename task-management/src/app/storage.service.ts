import { Injectable } from '@angular/core';
import { Task } from 'src/models/task.class';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  task: Task = new Task();
  newTask: Task = new Task();
  allIds: any;
  id: any;
  
  loadAllIds() {
    let allIds: any = localStorage.getItem('allIds');
    if (allIds) {
      this.allIds = JSON.parse(allIds);
      return this.allIds;
    }
  }

  saveAllIds(allIds:any) {
    localStorage.setItem('allIds', JSON.stringify(allIds));
  }

  save(id:string, newTask:object) {
    localStorage.setItem(id, JSON.stringify(newTask));
  }

}


