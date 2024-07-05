import React, { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav">
      <div className="left">
        <a href="/" className="logo">
          <img src="./logo.png" />
          <span>react estate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="/">Sign in</a>
        <a className="register">Sign up</a>
        <div
          className="menuIcon"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src="/menu.png" />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
