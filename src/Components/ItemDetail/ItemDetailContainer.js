import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import item from "../../data/item";
import Card from "../Card/CardWhitObject";
 /* Crear un EFFECTO para cargar en el montaje  */

 function traerProducto() {
  return new Promise((resolve => {
    setTimeout(() => {
      resolve(item)}, 2000);
    }))
  
}

/* Crear un estado para guardar un objeto/item/producto */
const ItemDetailContainer = ({ itemid }) => {
  const [item, setItem] = useState([])
  
  useEffect(() => {
    traerProducto()
      .then(products => { setItem(products[0])
      })
  }, [])

    return (
    <div className="main">
      {/* Crear componente ItemDetail y enviarle por props los datos del producto
       que guardamos en el estado (nombre, precio, imagen, etc.)          
      */}
    <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer;