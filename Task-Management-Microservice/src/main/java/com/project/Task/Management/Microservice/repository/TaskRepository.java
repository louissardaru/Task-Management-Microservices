package com.project.Task.Management.Microservice.repository;

import com.project.Task.Management.Microservice.entity.Task;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
	List<Task> findByStatus(String status);

    // Add more custom queries as needed
}

