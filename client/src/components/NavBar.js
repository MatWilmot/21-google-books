import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link to="/search" className="nav-link active">
          Search
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/saved" className="nav-link">
          Saved
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
