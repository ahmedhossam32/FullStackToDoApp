package com.todolist.controller;

import com.todolist.entity.Task;
import com.todolist.entity.User;
import com.todolist.service.TaskService;
import com.todolist.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @Autowired
    private UserService userService;

    // ✅ Create Task with userId
    @PostMapping
    public void addTask(@RequestBody Task task, @RequestParam Long userId) {
        User user = userService.getUserById(userId);
        task.setUser(user);
        taskService.createTask(task);
    }

    // ✅ Get tasks of specific user
    @GetMapping("/user/{userId}")
    public List<Task> getTasksByUserId(@PathVariable Long userId) {
        return taskService.getAllTasksByUserId(userId);
    }

    // ✅ Delete task (optional: add security check if needed)
    @DeleteMapping("/{taskId}")
    public void deleteTask(@PathVariable Long taskId) {
        taskService.deleteTask(taskId);
    }

    // ✅ Update task status
    @PutMapping("/updateStatus/{taskId}")
    public void updateTaskStatus(@PathVariable Long taskId, @RequestParam boolean done) {
        taskService.updateTaskStatus(taskId, done);
    }
}
