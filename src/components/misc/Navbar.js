import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import UserContext from "../../context/UseContext";

function Navbar() {
  const { user } = useContext(UserContext);

  return (
    <div className="navbar">
      <Link to="/">
        <h1>Snippet manager</h1>
      </Link>
      {!user ? (
        <>
          <Link to="/login">Log in</Link>
          <Link to="/register">Register</Link>
        </>
      ) : (
        <button className="btn-logout">Log out</button>
      )}
    </div>
  );
}

export default Navbar;
