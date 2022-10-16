import React from "react";

function Header(){
  return (
    <>
      <header className="header" id="sideNav">
        <h1><a href="https://www.instagram.com/turning_granular/?hl=en" className="logo">Andy Knolle</a></h1>
        <input className="side-menu" type="checkbox" id="side-menu"/>
        <label className="hamb" for="side-menu"><span className="hamb-line"></span></label>
      </header>
    </>
  );
}

export default Header;