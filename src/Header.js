import React, { useContext } from "react";

import { NavLink, Outlet } from "react-router-dom";
import kalata from "./Image/kalata.png";
import home from "./Image/home.png";
import menu from "./Image/menu.png";
import contact from "./Image/contact.png";
import info from "./Image/info.png";

import { Context } from "./Context";

export default function Header() {
  let context = useContext(Context);

  return (
    <>
      <div>
        <nav className="header">
          <ul>
            <li>
              <NavLink to="/">
                <img style={{ width: "35px", height: "35px" }} src={home}></img>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="menu">
                <img style={{ width: "35px", height: "35px" }} src={menu}></img>
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="ContactUs">
                <img
                  style={{ width: "35px", height: "35px" }}
                  src={contact}
                ></img>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="cart">
                <img style={{ width: "35px", height: "35px" }} src={info}></img>
                Cart
              </NavLink>
            </li>
          </ul>
          <NavLink className="addcart" to="addcart">
            <img style={{ width: "35px", height: "35px" , position: "relative" }} src={kalata}></img>
            <p style={{ fontWeight: "bold" , fontSize: "20px", color:"red", backgroundColor: "black" ,  position:"absolute",  padding: "5px" , borderRadius:"50%"}}>{context.number}</p>
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
