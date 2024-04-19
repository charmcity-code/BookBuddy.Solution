import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import bookLogo from "./assets/books.png";
import Account from "./components/Account";
import Books from "./components/Books";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navigations from "./components/Navigations";
import Register from "./components/Register";
import Reservations from "./components/Reservations";
import SingleBook from "./components/SingleBook";

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <Navigations token={token} />
      <div style={{ padding: "10px", maxWidth: "1280px", margin: "0 auto" }}>
        <h1 style={{ color: "#403d39" }}>
          <img id="logo-image" src={bookLogo} />
          Library App
        </h1>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/books/:id" element={<SingleBook token={token} />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/logout" element={<Logout setToken={setToken} />} />
          <Route path="/register" element={<Register setToken={setToken} />} />
          <Route path="/account" element={<Account token={token} />} />
          <Route
            path="/reservations"
            element={<Reservations token={token} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
