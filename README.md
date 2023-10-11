# Task-Management-Microservices
A project with Java-Spring-Microservices-Angular.

Skills used: Java, Spring Framework, Dependency Injection, Spring Boot, Microservices, REST API, Angular, Spring Tool Suite IDE, HTML, Java Script, TypeScript, H2 Database, Spring Security, Spring Cloud, Eureka Server.

Task management system where users can create, update, and list tasks through a web interface. The backend consist of microservices built with Spring Boot, and the frontend is developed using Angular.
On the server the id is handled by H2 Database, created and stored.
The API Gateway using Spring Cloud Gateway route requests to the appropriate microservice.
Service discovery using Spring Cloud Eureka that acts as a centralized registry, where microservices can register themselves and advertise their availability. It maintains a dynamic directory of available services, allowing other services to locate and communicate with each other. When a microservice starts up, it registers itself with the Eureka Server by providing its metadata, such as service name, host, and port.
Security implemented by Spring Security for authorization.

With Angular we: 
   - Implement a service to communicate with the backend REST API for tasks.
   - Create components for listing tasks, adding a new task, updating a task, etc.
   - Configure routing to navigate between different components.
   - Use Reactive Forms to create forms for adding and updating tasks.
   - Update the service to make HTTP requests to the backend REST API.


### Running the Project:

1. **Run Backend Microservices and Eureka Server:**
   Start with Eureka Server and continue with each microservice individually.

2. **Run API Gateway:**
   Start the API Gateway.

3. **Run Frontend:**
   Navigate to the Angular project directory and run `ng serve` in CMD.

4. **Access the Application:**
   Open your web browser and navigate to `http://localhost:4200` to access the Angular application.
