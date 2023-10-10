package com.project.API.Gateway.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;

@Configuration
public class GatewayConfig {

    @Bean
    public RouteLocator gatewayRoutes(RouteLocatorBuilder builder) {
        return builder.routes()
                .route("task-service", r -> r
                        .path("/api/tasks/**")
                        .uri("http://localhost:8081")) // Replace with the actual URL of your Task Management Microservice
                .route("user-service", r -> r
                        .path("/api/users/**")
                        .uri("http://localhost:8082")) // Replace with the actual URL of your User Authentication Microservice
                .build();
    }
}

