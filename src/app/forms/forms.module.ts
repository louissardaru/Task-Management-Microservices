// src/app/forms/forms.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from './task-form/task-form.component';



@NgModule({
  declarations: [
    TaskFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormsModule { }
