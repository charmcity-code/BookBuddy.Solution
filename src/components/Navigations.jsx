/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */

import { Link } from "react-router-dom";

const Navigations = ({ token }) => {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        backgroundColor: "#eb5e28",
        padding: "10px",
        height: "30px",
        fontSize: "large",
      }}
    >
      <Link style={{ textDecoration: "none", color: "#252422" }} to="/">
        Home
      </Link>

      {token ? (
        <>
          <Link
            style={{ textDecoration: "none", color: "#252422" }}
            to="/account"
          >
            Account
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#252422" }}
            to="/logout"
          >
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link
            style={{ textDecoration: "none", color: "#252422" }}
            to="/login"
          >
            Login
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#252422" }}
            to="/register"
          >
            Register
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navigations;
