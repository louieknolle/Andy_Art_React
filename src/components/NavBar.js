import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const uncheck = () => {
    let input = document.getElementById("side-menu");
    input.checked = false;
  };

  let activeStyle = {
    textDecoration: "",
  };

  let activeClassName = "underline";

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
          <ul className="menu" onClick={uncheck}>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Collection 1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/collection"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Collection 2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/collection3"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                Collection 3
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/collection4"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                Collection 4
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/collection5"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                Collection 5
              </NavLink>
            </li>
            <div className="nonArtLinks">
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
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
