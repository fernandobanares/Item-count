import React from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  let activeStyle ={
    color:"violet"
  }

  const menu = [{ url: "/", title: "Homepage"},{ url: "/detalle/item1", title: "Detalle 1"},{ url: "/detalle/item2", title: "Detalle 2"} ]
  return (
    <div className="nav-bar">
      {/* <ul className="nav-menu">
        <li>Inicio</li>
        <li>Categoría B</li>
        <li>Categoría A</li>
        <li>Categoría C</li>
      </ul> */}
      {menu.map (enlace => <NavLink to={enlace.url} style = {({isActive}) => (isActive ? { color: "violet"} : undefined)}>{enlace.title}</NavLink>)}
    </div>
  );
}

export default NavBar;