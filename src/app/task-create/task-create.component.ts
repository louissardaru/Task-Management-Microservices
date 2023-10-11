// src/app/task-create/task-create.component.ts
import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css'],
})
export class TaskCreateComponent implements OnInit {
  newTask: Task = {
    title: '',
    description: '',
    status: 'TODO',
  };

 constructor(private taskService: TaskService) {}

 ngOnInit(): void {}

  createTask() {
  //console.log('Creating task:', this.newTask);
  this.taskService.createTask(this.newTask).subscribe(
    (createdTask) => {
      // Task created successfully, handle as needed
      console.log('Task created:', createdTask);
      this.newTask = { title: '', description: '', status: 'TODO' };
    },
    (error) => {
      console.error('Error creating task:', error);
    });
  }
}
