// src/app/task-update/task-update.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css'],
})
export class TaskUpdateComponent implements OnInit {
  @Input() task: Task | undefined;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  updateTask() {
    if (this.task && this.task.id !== undefined) {
      this.taskService.updateTask(this.task.id, this.task).subscribe(() => {
        // Task updated successfully, handle as needed
      });
    } else {
      console.error('Task or task id is undefined');
    }
  }
}
