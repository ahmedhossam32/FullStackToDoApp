import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
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
        <h2 style={{ textAlign: "center", color: "black" }}>Sign Up</h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            username: "",
            password: "",
          }}
          onSubmit={async (values) => {
            try {
              const response = await axios.post(
                "http://localhost:8080/api/users/signup",
                values
              );
              alert(response.data);
              navigate("/login");
            } catch (error) {
              alert("Signup error: " + error.message);
            }
          }}
        >
          <Form>
            <label
              style={{ display: "block", color: "black", marginTop: "1rem" }}
            >
              Name
            </label>
            <Field
              name="name"
              type="text"
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <label style={{ display: "block", color: "black" }}>Email</label>
            <Field
              name="email"
              type="email"
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <label style={{ display: "block", color: "black" }}>Username</label>
            <Field
              name="username"
              type="text"
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <label style={{ display: "block", color: "black" }}>Password</label>
            <Field
              name="password"
              type="password"
              style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
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
              Sign Up
            </button>

            <button
              type="button"
              onClick={() => navigate("/login")}
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                marginTop: "10px",
              }}
            >
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
