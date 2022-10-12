import React from "react";

function NavBar() {
  return (
    <>
      <nav className="nav">
        <ul className="menu">
          <li>Collection 1</li>
          <li>Collection 2</li>
          <li>Collection 3</li>
          <li>Collection 4</li>
          <div className="nonArtLinks">
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;