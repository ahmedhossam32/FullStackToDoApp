# 🧠 Backend – ToDoList (Spring Boot)

This is the backend for the Full Stack Todo App, built entirely using **Java**, **Spring Boot**, and **PostgreSQL**. The backend is the main focus of this project — it follows clean architectural patterns with proper layering and RESTful practices.

---

## ⚙️ Tech Stack

- **Java 17**
- **Spring Boot 3.5**
- **Spring MVC** (for REST Controllers)
- **Spring Data JPA** (for database access)
- **PostgreSQL** (as the relational database)
- **Maven** (for project management and builds)

---

## 🗂 Project Structure

The backend follows a **multi-layered architecture**:

ToDoList/
├── config/ → CORS configuration (WebConfig)
├── controller/ → Handles HTTP requests (REST APIs)
├── service/ → Contains business logic
├── repository/ → Data access layer (Spring JPA)
├── entity/ → Domain models (User, Task)
└── ToDoListApplication.java → Main Spring Boot app


This is a classic **MVC-inspired clean layering**:
- **Model**: represented by `entity/` classes
- **Controller**: exposed via `@RestController` classes
- **Service**: contains actual app logic
- **Repository**: interacts with the DB using Spring Data JPA

---

📡 API Endpoints

User Endpoints

| Method | Endpoint                         | Description          |
| ------ | -------------------------------- | -------------------- |
| `POST` | `/api/users/signup`              | Create a new user    |
| `POST` | `/api/users/login`               | Log in a user        |
| `GET`  | `/api/users/username/{username}` | Get user by username |
| `GET`  | `/api/users/{id}`                | Get user by ID       |

✅ Task Endpoints

| Method   | Endpoint                                     | Description                 |
| -------- | -------------------------------------------- | --------------------------- |
| `POST`   | `/api/tasks?userId={userId}`                 | Create a new task           |
| `GET`    | `/api/tasks/user/{userId}`                   | Retrieve all tasks for user |
| `PUT`    | `/api/tasks/updateStatus/{taskId}?done=true` | Update task status          |
| `DELETE` | `/api/tasks/{taskId}`                        | Delete a task by ID         |

---

 CRUD Operations
🟢 Create
POST /api/users/signup → Create user
POST /api/tasks?userId=1 → Create task for a user

🟡 Read
GET /api/users/username/Hossam → Get user by username

GET /api/tasks/user/1 → Get all tasks for user

🟠 Update
PUT /api/tasks/updateStatus/5?done=true → Mark task as done

🔴 Delete
DELETE /api/tasks/5 → Delete task with ID 5

---
## 🧩 Maven & Build

The backend is a Maven project and uses the following structure:

```bash
/ToDoList
├── pom.xml           # Maven dependencies (Spring Boot, JPA, PostgreSQL)
├── src/main/java/    # Java source files
└── src/main/resources/
    └── application.properties




