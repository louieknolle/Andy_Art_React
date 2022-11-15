import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <header className="header" id="sideNav">
        <h1>
          <a
            href="https://www.instagram.com/turning_granular/?hl=en"
            className="logo"
            target="_blank"
            rel="noreferrer"
          >
            Andy Knolle
          </a>
        </h1>
        <input className="side-menu" type="checkbox" id="side-menu" />
        <label className="hamb" for="side-menu">
          <span className="hamb-line"></span>
        </label>
        <nav className="nav">
          <ul className="menu">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                Collection 1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/collection2"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                Collection 2
              </NavLink>
            </li>
            {/* <li>
            <NavLink
                to='/collection3' 
                className={({isActive})=>(isActive ? 'link active' : 'link')}
                >
                Collection 3
              </NavLink>
            </li>
            <li>
            <NavLink
                to='/collection4' 
                className={({isActive})=>(isActive ? 'link active' : 'link')}
                >
                Collection 4
              </NavLink>
            </li> */}
            <div className="nonArtLinks">
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "link active" : "link"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "link active" : "link"
                  }
                >
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
