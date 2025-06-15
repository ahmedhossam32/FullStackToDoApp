package com.todolist.controller;

import com.todolist.entity.User;
import com.todolist.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")  // base path for user-related endpoints
public class UserController {

    @Autowired
    private UserService userService;


    @PostMapping("/signup")
    public String createUser(@RequestBody User user) {
        User existingUser = userService.getUserByUsername(user.getUsername());
        if (existingUser != null) {
            return "Username already exists.";
        }

        userService.createUser(user);
        return "User registered successfully.";
    }

    @GetMapping("/username/{username}")
    public User getUserByUsername(@PathVariable String username) {
        return userService.getUserByUsername(username);
    }



    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User loggedInUser = userService.login(user.getUsername(), user.getPassword());
        if (loggedInUser == null) {
            return "Invalid username or password.";
        }

        return "Login successful. Welcome, " + loggedInUser.getUsername() + "!";
    }
}
