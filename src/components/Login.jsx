/* TODO - add your code to create a functional React component that renders a login form */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";

const Login = ({ setToken }) => {
  const styles = { marginBottom: "10px" };

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const APIData = await loginUser(formData.email, formData.password);
    setToken(APIData.token);
    setFormData({
      email: "",
      password: "",
    });
    navigate("/account");
  };

  return (
    <>
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
