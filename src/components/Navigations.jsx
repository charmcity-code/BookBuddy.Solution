/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */

import { Link } from "react-router-dom";

const linkStyles = { textDecoration: "none", color: "#252422" };

const Navigations = ({ token }) => {
  const renderLoggedInLinks = () => (
    <>
      <Link style={{ ...linkStyles }} to="/account">
        Account
      </Link>
      <Link style={{ ...linkStyles }} to="/logout">
        Logout
      </Link>
    </>
  );

  const renderLoggedOutLinks = () => (
    <>
      <Link style={{ ...linkStyles }} to="/login">
        Login
      </Link>
      <Link style={{ ...linkStyles }} to="/register">
        Register
      </Link>
    </>
  );

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
      <Link style={{ ...linkStyles }} to="/">
        Home
      </Link>
      {token ? renderLoggedInLinks() : renderLoggedOutLinks()}
    </nav>
  );
};

export default Navigations;
