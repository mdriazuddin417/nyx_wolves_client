import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div class="navbar bg-transparent py-5 px-12">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0 space-x-3">
          <li>
            <NavLink to={"/home"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"addproduct"}>Add Product</NavLink>
          </li>

          <li>
            <NavLink to={"team"}>Team</NavLink>
          </li>
          <li>
            <NavLink to={"login"}>Login</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
