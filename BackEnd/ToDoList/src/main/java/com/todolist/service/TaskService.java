package com.todolist.service;

import com.todolist.entity.Task;
import com.todolist.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;


    public void createTask(Task task) {
        taskRepository.save(task);
    }

    public List<Task> getAllTasksByUserId(Long userId) {
        return taskRepository.findAllByUserId(userId);
    }

    public void updateTaskStatus(Long taskId, boolean done) {
        Optional<Task> optionalTask = taskRepository.findById(taskId);
        if (optionalTask.isPresent()) {
            Task task = optionalTask.get();
            task.setDone(done);
            taskRepository.save(task); // save updated task
        } else {
            throw new RuntimeException("Task not found");
        }
    }

    public void deleteTask(Long taskId) {
        taskRepository.deleteById(taskId);
    }
}
