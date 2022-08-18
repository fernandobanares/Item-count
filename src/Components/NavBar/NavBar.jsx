import React from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";




function NavBar() {
  // let activeStyle ={
  //   color:"violet"
  // }

  const menu = [{ url: "/", title: "Homepage"},{ url: "/detalle/1", title: "Detalle 1"},{ url: "/detalle/2", title: "Detalle 2"},{ url: "/category", title: "Categoria"}]
  return (
    <div className="nav-bar">
      {menu.map (enlace => <NavLink to={enlace.url}>{enlace.title}</NavLink>)}
      {/* style = {({isActive}) => (isActive ? { color: "violet"} : undefined)} */}
      <img src="../../../public/carrito.png" alt="carrito" />
    </div>
    
  );
}

export default NavBar;

