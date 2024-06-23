import { Injectable } from '@angular/core';
import { TASKS } from '@constants/tasks';
import { Task } from '@models/global.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Task[] {
    return TASKS;
  }
}
