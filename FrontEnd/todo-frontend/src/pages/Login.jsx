import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fff7f0",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "60px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
        }}
      >
        <h2 style={{ textAlign: "center", color: "black" }}>Login</h2>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={async (values) => {
            try {
              const response = await axios.post(
                "http://localhost:8080/api/users/login",
                values
              );

              if (response.data.includes("Login successful")) {
                const userDetails = await axios.get(
                  `http://localhost:8080/api/users/username/${values.username}`
                );
                const user = userDetails.data;

                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("userId", user.id);
                localStorage.setItem("username", user.username);

                navigate("/tasks");
              } else {
                alert("Login failed: " + response.data);
              }
            } catch (error) {
              alert("Login error: " + error.message);
            }
          }}
        >
          <Form>
            <label
              style={{ display: "block", color: "black", marginTop: "1rem" }}
            >
              Username
            </label>
            <Field
              name="username"
              type="text"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
              }}
            />

            <label style={{ display: "block", color: "black" }}>Password</label>
            <Field
              name="password"
              type="password"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
              }}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "black",
                color: "white",
                border: "none",
              }}
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => navigate("/signup")}
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                marginTop: "10px",
              }}
            >
              Signup
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
