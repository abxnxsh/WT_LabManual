import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: string[] = [];

  addTask(task: string): void {
    this.tasks.push(task);
  }

  getTasks(): string[] {
    return this.tasks;
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
