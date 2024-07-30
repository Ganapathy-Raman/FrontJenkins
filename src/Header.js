import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header class="navbar fixed-top">
        <nav>
          <ul>
            <li role="header">
              Online Vehicle Insurance System
            </li>
            {/* <li class="active">
              <Link to="/">Home</Link>
            </li> */}
            
            <li>
              <Link to="/viewCustomer">View Customer</Link>
            </li>
            
            <li>
              <Link to="/viewInsurance">View Insurance</Link>
            </li>

           
            <li>
              <Link to="/">Logout</Link>
            </li>
            <li>
              <input type='text'></input>
              <button1>Search Customer</button1>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
export default Header;