import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import useProducts from "../customHook/useProducts";
const Header = () => {
  const count = useSelector((state) => state.count);
  const [products] = useProducts();
  const quantity = products?.length;
  return (
    <div className="navbar bg-transparent py-5 px-12 sticky top-0 bg-base-100 z-40">
      <div className="flex-1">
        <a className="normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 space-x-3">
          <li>
            <NavLink to={"/home"}>Home</NavLink>
          </li>
          <li className="indicator">
            <NavLink to={"/product"} className="border border-purple-800">
              Products
              <span className="indicator-item badge badge-secondary">
                {quantity}
              </span>
            </NavLink>
          </li>
          <li className="indicator border border-purple-800 rounded-md">
            <span>Product Visit</span>
            <span className="indicator-item badge badge-secondary">
              {count}
            </span>
          </li>

          <li>
            <NavLink to={"addproduct"}>Add Product</NavLink>
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
