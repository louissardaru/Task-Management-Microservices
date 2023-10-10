package com.project.User.Authentication.Microservice.repository;

import com.project.User.Authentication.Microservice.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
}