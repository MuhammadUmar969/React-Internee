import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleBtn = () => setOpen(!open);

  const [color, setColor] = useState(false);

  const changeColor = () => {
     if(window.scrollY >= 100){
      setColor(true);
     }
     else {
      setColor(false);
     }
  }

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
          <h1>Portfolio</h1>
        </Link>

        <ul className={ open ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="hamburger" onClick={handleBtn}>
          {open ? (
            <FaTimes
              size={20}
              style={{
                color: "#fff",
              }}
            />
          ) : (
            <FaBars
              size={20}
              style={{
                color: "#fff",
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
