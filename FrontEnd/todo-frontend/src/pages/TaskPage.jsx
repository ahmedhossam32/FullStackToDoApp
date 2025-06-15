import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./TaskPage.css";

function TaskPage() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn || !userId) {
      navigate("/login"); // redirect if not logged in
    } else {
      getTasks();
    }
  }, [userId]);

  const addTask = async () => {
    if (taskText.trim() === "") return;

    const newTask = {
      title: taskText,
      description: "",
      done: false,
    };

    try {
      await axios.post(
        `http://localhost:8080/api/tasks?userId=${userId}`,
        newTask
      );
      setTaskText("");
      getTasks();
    } catch (error) {
      alert("Error adding task: " + (error.response?.data || error.message));
      console.error(error);
    }
  };

  const getTasks = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/tasks/user/${userId}`
      );
      setTasks(response.data);
    } catch (error) {
      alert("Error fetching tasks: " + error.message);
    }
  };

  const markAsDone = async (id) => {
    try {
      await axios.put(
        `http://localhost:8080/api/tasks/updateStatus/${id}?done=true`
      );
      getTasks();
    } catch (error) {
      alert("Error updating task: " + error.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/tasks/${id}`);
      getTasks();
    } catch (error) {
      alert("Error deleting task: " + error.message);
    }
  };

  return (
    <div className="task-page">
      <h2 className="task-title">
        Add your tasks — we’ll help you stay on track
      </h2>
      <div className="task-form">
        <input
          type="text"
          value={taskText}
          placeholder="Enter a task"
          onChange={(e) => setTaskText(e.target.value)}
          className="task-input"
        />
        <button className="save-btn" onClick={addTask}>
          Save
        </button>
        <button className="fetch-btn" onClick={getTasks}>
          Get Tasks
        </button>
      </div>

      <table className="task-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Todo item</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id}>
              <td>{index + 1}</td>
              <td>{task.title}</td>
              <td>{task.done ? "Done" : "In progress"}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
                <button
                  className="finish-btn"
                  onClick={() => markAsDone(task.id)}
                >
                  Finished
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskPage;
