  import { Component } from '@angular/core';
  import { TaskService } from '../task.service';

  @Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.css'],
  })
  export class AddTaskComponent {
    newTask: string = '';

    constructor(private taskService: TaskService) {}

    addTask(): void {
      if (this.newTask.trim() !== '') {
        this.taskService.addTask(this.newTask);
        this.newTask = '';
      }
    }
  }
