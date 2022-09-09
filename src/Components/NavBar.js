import React from 'react'
import {  Link} from "react-router-dom";
function NavBar() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contect">Contect</Link></li>
        <li><Link to="/User/kd">kd</Link></li>
        <li><Link to="/User/Rahul">Rahul</Link></li>
      </ul>
    </div>
  )
}

export default NavBar;
