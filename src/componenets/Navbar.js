import "./Navbar.css";

import { NavLink } from "react-router-dom";

import MenuItems from "./MenuItems";

import React from "react";
import { useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Traveller</h1>

      <div className="menu-icons">
        <i
          onClick={() => setToggle(!toggle)}
          className={toggle ? "fas fa-bars" : "fas fa-times"}
        ></i>
      </div>

     
        <ul className={toggle?"nav-menu":"nav-menu active"}>
        
          {MenuItems.map((items, index) => {
            return (
              <NavLink  className={items.cName} key={index} to={items.url}>
                <i class={items.icon}></i>
                {items.title}
              </NavLink>
            );
          })}
          <button className="s-btn">Sing Up</button>
      
        </ul>
    </nav>
  );
}

export default Navbar;
