// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Add this line
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from './forms/task-form/task-form.component'; // Correct the path
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskDetailComponent,
    TaskCreateComponent,
    TaskUpdateComponent,
    TaskFormComponent, // Correct the component name
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, // Add this line
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
