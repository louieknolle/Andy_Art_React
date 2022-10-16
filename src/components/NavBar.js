import React from "react";
import { NavLink } from 'react-router-dom'
import Header from "./Header";

function NavBar() {
  return (
    <>
      <Header />
      <nav className="nav">
        <ul className="menu">
          <li>
            <NavLink
              to='/' 
              className={({isActive})=>(isActive ? 'link active' : 'link')}
              >
              Collection 1
            </NavLink>
          </li>
          <li>
          <NavLink
              to='/collection2' 
              className={({isActive})=>(isActive ? 'link active' : 'link')}
              >
              Collection 2
            </NavLink>
          </li>
          <li>
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
          </li>
          <div className="nonArtLinks">
            <li>
              <NavLink
                to='/blog' 
                className={({isActive})=>(isActive ? 'link active' : 'link')}
                >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about' 
                className={({isActive})=>(isActive ? 'link active' : 'link')}
                >
                About
              </NavLink>
            </li>
            <li>
            <NavLink
                to='/contact' 
                className={({isActive})=>(isActive ? 'link active' : 'link')}
                >
                Contact
              </NavLink>  
            </li> 
          </div>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;