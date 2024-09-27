
import React, { useState } from "react";
import "./index"; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <nav className={isOpen ? "active" : ""}>
      <div className="logo">DevKrl</div>
      <div className={`burger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#abouts">About</a></li>
        <li><a href="#contacts">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

