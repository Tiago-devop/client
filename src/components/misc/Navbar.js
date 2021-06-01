import Axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UseContext";
import domain from "../../util/domain";
import "./Navbar.scss";

function Navbar() {
  const { user, getUser } = useContext(UserContext);

  async function logOut() {
    await Axios.get(`${domain}/auth/logOut`);
    await getUser();
  }

  return (
    <div className="navbar">
      <Link to="/">
        <h1>Snippet manager</h1>
      </Link>
      {user === null ? (
        <>
          <Link to="/login">Log in</Link>
          <Link to="/register">Register</Link>
        </>
      ) : (
        user && (
          <button className="btn-logout" onClick={logOut}>
            Log out
          </button>
        )
      )}
    </div>
  );
}

export default Navbar;
