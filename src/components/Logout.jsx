import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setToken }) => {
  const navigate = useNavigate();

  useEffect(() => {
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
