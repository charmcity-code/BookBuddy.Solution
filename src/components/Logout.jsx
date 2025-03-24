import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setToken }) => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("myToken");
    setToken(null);
    navigate("/");
  }, []);

  return (
    <>
      <h1>Logging Out</h1>
    </>
  );
};

export default Logout;
