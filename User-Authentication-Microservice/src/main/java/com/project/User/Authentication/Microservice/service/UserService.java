package com.project.User.Authentication.Microservice.service;

import com.project.User.Authentication.Microservice.entity.User;

public interface UserService {

    User findByUsername(String username);

    User createUser(User user);
}