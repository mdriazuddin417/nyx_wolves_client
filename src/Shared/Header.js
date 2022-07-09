import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const count = useSelector((state) => state.count);
  return (
    <div class="navbar bg-transparent py-5 px-12 sticky top-0 bg-base-100 z-40">
      <div class="flex-1">
        <a class="normal-case text-xl">daisyUI</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0 space-x-3">
          <li>
            <NavLink to={"/home"}>Home</NavLink>
          </li>
          <li className="indicator">
            <NavLink to={"/home"} className="border border-purple-800">
              Products
              <span class="indicator-item badge badge-secondary">{count}</span>
            </NavLink>
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
