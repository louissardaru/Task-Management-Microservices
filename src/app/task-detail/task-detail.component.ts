// src/app/task-detail/task-detail.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent implements OnInit {
  @Input() task: Task | undefined;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // Load task details if needed
  }
}
