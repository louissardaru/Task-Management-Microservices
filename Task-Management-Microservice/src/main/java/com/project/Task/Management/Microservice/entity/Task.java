package com.project.Task.Management.Microservice.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Task {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;
 
 private String title;
 private String description;
 private String status;

 // Constructors, getters, and setters

 // Constructor for JPA
 public Task() {}

 public Task(String title, String description, String status) {
     this.title = title;
     this.description = description;
     this.status = status;
 }

 @Override
 public String toString() {
     return "Task{id=" + id + ", title='" + title + "', description='" + description + "', status='" + status + "'}";
 }
 // Getters and setters

 public Long getId() {
     return id;
 }

 public void setId(Long id) {
     this.id = id;
 }

 public String getTitle() {
     return title;
 }

 public void setTitle(String title) {
     this.title = title;
 }

 public String getDescription() {
     return description;
 }

 public void setDescription(String description) {
     this.description = description;
 }

 public String getStatus() {
     return status;
 }

 public void setStatus(String status) {
     this.status = status;
 }
}

