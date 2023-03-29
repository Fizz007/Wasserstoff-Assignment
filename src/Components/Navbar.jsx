import React, { useState } from "react";
import { GrWordpress } from "react-icons/gr";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {

  return (
    <>
      <header className="nav">
        <div className="logo">
          <span>
            <GrWordpress size={20} />
          </span>
          <p>WASSERSTOFF</p>
        </div>

        <div className="search_Link">
          <div className="searchbar">
            <input type="search" />
            <span>
              <HiMagnifyingGlass size={15} />
            </span>
          </div>
          <nav >
            <ul className="navlinks">
              <li>
                <NavLink to="/">Statistics</NavLink>
                
              </li>
              <li>
                <NavLink to="/">Overveiw</NavLink>
               
              </li>
              <li >
                <NavLink to="/dashboard">Dashboard</NavLink>
                
              </li>
              <li>
                <NavLink to="/analytics">Analytics</NavLink>
                
              </li>
            </ul>
          </nav>
          <div className="profile">
            <span>
              <AiOutlineUser size={20} />
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
