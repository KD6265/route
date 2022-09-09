import React from "react";
import { Link, Outlet } from "react-router-dom";

function Contect() {
  return (
    <div>
      <h1>Contect Page</h1>
      <ul>
        <li>
          <Link to="Email">Email</Link>
        </li>
        <li>
          <Link to="Number">Number</Link>
        </li>
        <Outlet />
      </ul>


    </div>
  );
}

export default Contect;
