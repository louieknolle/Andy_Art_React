import React from "react";
import '../styles/navbar.css';

function NavBar() {
  return (
    <>
      <nav className="nav">
        <ul className="menu">
          <li><a href="www.google.com">Collection 1</a></li>
          <li><a href="www.google.com">Collection 2</a></li>
          <li><a href="www.google.com">Collection 3</a></li>
          <li><a href="www.google.com">Collection 4</a></li>
          <div className="nonArtLinks">
            <li><a href="www.google.com">Blog</a></li>
            <li><a href="www.google.com">About</a></li>
            <li><a href="www.google.com">Contact</a></li> 
          </div>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;