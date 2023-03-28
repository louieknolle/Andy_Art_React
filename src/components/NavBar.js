import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const uncheck = () => {
    let input = document.getElementById("side-menu");
    input.checked = false;
  };

  return (
    <>
      <header className="header" id="sideNav">
        <h1>
          <NavLink to="/chromatic" className="logo">
            Andy Knolle
          </NavLink>
        </h1>
        <input className="side-menu" type="checkbox" id="side-menu" />
        <label className="hamb" for="side-menu">
          <span className="hamb-line"></span>
        </label>

        <nav className="nav">
          <ul className="menu" onClick={uncheck}>
            <li>
              <NavLink to="/chromatic">Chromatic Delineations</NavLink>
            </li>
            <li>
              <NavLink to="/saho" exact activeClassName="active">
                S.A.H.0.
              </NavLink>
            </li>
            <li>
              <NavLink to="subdivisions" exact activeClassName="active">
                Sub-Divisions
              </NavLink>
            </li>
            <li>
              <NavLink to="constructs" exact activeClassName="active">
                Failed Constructions
              </NavLink>
            </li>
            <li>
              <NavLink to="noisyrelations" exact activeClassName="active">
                Noisy Relations
              </NavLink>
            </li>
            <div className="nonArtLinks">
              <li>
                <NavLink to="/about" exact activeClassName="active">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" exact activeClassName="active">
                  Contact
                </NavLink>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
