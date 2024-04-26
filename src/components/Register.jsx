/* TODO - add your code to create a functional React component that renders a registration form */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api";

const Register = ({ setToken }) => {
  const styles = { marginBottom: "10px" };

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const APIData = await registerUser(
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.password
    );
    setToken(APIData.token);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
    navigate("/account");
  };

  return (
    <>
      <h2>Register</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "inline-block",
          backgroundColor: "#ccc5b9",
          margin: "10px",
          padding: "30px",
          borderRadius: "25px",
        }}
      >
        <label>
          First Name:{" "}
          <input
            style={styles}
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:{" "}
          <input
            style={styles}
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:{" "}
          <input
            style={styles}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:{" "}
          <input
            style={styles}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
