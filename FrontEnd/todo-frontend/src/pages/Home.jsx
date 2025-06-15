import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Todo App</h1>
      <p>Organize your life in simple steps. Sign up to get started!</p>
      <p style={{ marginTop: "20px", fontStyle: "italic", color: "#5d3a00" }}>
        You can add, delete, and track tasks effortlessly.
      </p>
    </div>
  );
}

export default Home;
