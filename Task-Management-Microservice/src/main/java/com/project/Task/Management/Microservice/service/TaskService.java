package com.project.Task.Management.Microservice.service;

import com.project.Task.Management.Microservice.entity.Task;

import java.util.List;

public interface TaskService {

    List<Task> getAllTasks();

    Task getTaskById(Long taskId);

    Task createTask(Task task);

    Task updateTask(Long taskId, Task updatedTask);

    void deleteTask(Long taskId);
}
