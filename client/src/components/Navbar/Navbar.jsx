import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">Gigster</h1>
      <div className="links">
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Explore</a>
        <a href="">Apply as a freelancer</a>
      </div>
      <div className="buttons">
        <span className="sign-in">Sign in</span>
        <button className="join">Join</button>
      </div>
    </div>
  );
};

export default Navbar;
