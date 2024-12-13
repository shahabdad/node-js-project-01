// import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ isLoggedIn, onLogin, onLogout }) {
  const navigate = useNavigate();

  // If the user is not logged in, navigating to /login
  const handleLoginClick = () => {
    if (!isLoggedIn) {
      navigate("/Login");
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/contact" className="nav-link">
        Contact
      </Link>
      {isLoggedIn && (
        <Link to="/table" className="nav-link">
          Table
        </Link>
      )}
      
      {isLoggedIn ? (
        <button className="btn btn-danger" onClick={onLogout}>
          Logout
        </button>
      ) : (
        <button className="btn btn-success" onClick={handleLoginClick}>
          Login
        </button>
      )}
    </nav>
  );
}

export default Navbar;
