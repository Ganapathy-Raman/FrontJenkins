import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
function Head() {
    return(
        <>
        
        <header class="navbar fixed-top">
        <nav>
          <ul>
            <li role="header">
              Online Vehicle Insurance System
            </li>
            <li class="active" >
              <Link role="home" to="/" >Home</Link>
            </li>
            <li> <Link to="/Login" >Login</Link>
            </li>
            <li>
              <Link to="/Register" >Register</Link>
            </li>
            <li>
              <Link to="/aboutus" >About Us</Link>
            </li>
          </ul>
        </nav>
      </header>

        </>
    )
}
export default Head;