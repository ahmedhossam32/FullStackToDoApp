# 🧠 Backend – ToDoList (Spring Boot)

This is the backend of the **Full Stack ToDo App**, developed using **Java**, **Spring Boot**, and **PostgreSQL**. The backend is the primary focus of this project — built with a clean layered architecture, proper RESTful design, and modular best practices for scalable application development.

---

## ⚙️ Tech Stack

- **Java 17**
- **Spring Boot 3.5**
- **Spring MVC** – for building REST APIs
- **Spring Data JPA** – for database operations
- **PostgreSQL** – relational database
- **Maven** – for project management and builds

---

## 🗂 Project Structure

The backend follows a clean, **multi-layered architecture** inspired by the **MVC pattern**, with separation of concerns across layers:

```
ToDoList/
├── config/            → CORS and global configurations
├── controller/        → REST API endpoints (UserController, TaskController)
├── service/           → Business logic layer (UserService, TaskService)
├── repository/        → Data access layer using Spring Data JPA
├── entity/            → Domain models (User, Task)
└── ToDoListApplication.java → Main application entry point
```

### ✅ Clean MVC Structure

- **Model** – `entity/` contains JPA-annotated classes (`User`, `Task`)
- **Repository** – `repository/` uses `JpaRepository` for database abstraction
- **Service** – `service/` contains core logic for task and user management
- **Controller** – `controller/` exposes REST endpoints

---

## 🛢 Database – PostgreSQL

The app connects to a local PostgreSQL database.

### 🧱 Required setup:
Create a database manually (or through pgAdmin):

```sql
CREATE DATABASE todolist_db;
```

---

## ⚙️ Configuration – `application.properties`

Located in `src/main/resources/`, this file controls the database connection and Hibernate behavior:

```properties
spring.application.name=ToDoList

# ✅ Update these with your own PostgreSQL credentials:
spring.datasource.url=jdbc:postgresql://localhost:5432/todolist_db
spring.datasource.username=your_db_username
spring.datasource.password=your_db_password

# JPA / Hibernate
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
```

> ⚠️ Never commit real passwords to GitHub.

---

## 📡 API Endpoints

### 👤 User Endpoints

| Method | Endpoint                          | Description              |
|--------|-----------------------------------|--------------------------|
| `POST` | `/api/users/signup`              | Register a new user      |
| `POST` | `/api/users/login`               | Authenticate a user      |
| `GET`  | `/api/users/username/{username}` | Get user by username     |
| `GET`  | `/api/users/{id}`                | Get user by ID           |

---

### ✅ Task Endpoints

| Method   | Endpoint                                         | Description                  |
|----------|--------------------------------------------------|------------------------------|
| `POST`   | `/api/tasks?userId={userId}`                    | Create a new task            |
| `GET`    | `/api/tasks/user/{userId}`                      | Get all tasks for a user     |
| `PUT`    | `/api/tasks/updateStatus/{taskId}?done=true`    | Mark a task as done          |
| `DELETE` | `/api/tasks/{taskId}`                           | Delete a task by its ID      |

---

## 🔄 CRUD Operations Overview

### 🟢 Create
- `POST /api/users/signup` → Create a new user  
- `POST /api/tasks?userId=1` → Add a new task for a user

### 🟡 Read
- `GET /api/users/username/{username}` → Get user details by username  
- `GET /api/tasks/user/{userId}` → Get all tasks for a user

### 🟠 Update
- `PUT /api/tasks/updateStatus/{taskId}?done=true` → Update a task’s status to "done"

### 🔴 Delete
- `DELETE /api/tasks/{taskId}` → Remove a task from the database

---

## 📥 Example Request & Response

### ▶️ Create Task Request

```http
POST /api/tasks?userId=1
Content-Type: application/json
```

```json
{
  "title": "Study Spring Boot",
  "description": "Complete service layer integration",
  "done": false
}
```

---

### 📤 Get Tasks Response

```json
[
  {
    "id": 1,
    "title": "Study Spring Boot",
    "description": "Complete service layer integration",
    "done": false,
    "createdAt": "2025-06-15T13:31:43.720738"
  }
]
```

---

## 🧩 Maven & Build Instructions

The project uses Maven as the build tool. Core files include:

```
/ToDoList
├── pom.xml                 # Maven dependencies (Spring Boot, JPA, PostgreSQL)
├── mvnw / mvnw.cmd         # Maven wrapper (optional)
├── src/main/java/          # Java source files
└── src/main/resources/
    └── application.properties
```

### ▶️ To build and run the project:

```bash
mvn clean install
mvn spring-boot:run
```

Or simply run the application from your IDE (IntelliJ recommended).

---

## 🚀 Getting Started

1. Ensure PostgreSQL is running  
2. Create the `todolist_db` database  
3. Configure `application.properties` with your credentials  
4. Run the backend using Maven or your IDE  
5. Test using Postman or frontend React app

---

## 🎯 Future Improvements

- Add JWT authentication for secure login
- Add task categories and due dates
- Input validation with DTOs and exception handlers
- Role-based access (e.g., admin vs user)
- Add pagination and filtering for task lists

---

## ✅ Status

This backend is fully functional and serves as the core of the Full Stack ToDo application. It's designed with scalability and maintainability in mind and is production-ready with minor enhancements.
