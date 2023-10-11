// task-form.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  @Input() task: Task = { title: '', description: '', status: '' };
  @Output() submitForm = new EventEmitter<Task>();

  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const formData: Task = this.taskForm.value;
      this.submitForm.emit(formData);
      this.taskForm.reset();
    }
  }
}
