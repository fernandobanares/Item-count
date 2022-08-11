import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import item from "../../data/item";
import Card from "../Card/CardWhitObject";
 /* Crear un EFFECTO para cargar en el montaje  */

 function traerProducto() {
  return new Promise((resolve => {
    setTimeout(() => {
      resolve(item[0])}, 2000);
    }))
  
}

/* Crear un estado para guardar un objeto/item/producto */
const ItemDetailContainer = () => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    traerProducto()
      .then(respuesta => { setData(respuesta)
      })
  }, [])

    return (
    <div className="main">
      {/* Crear componente ItemDetail y enviarle por props los datos del producto
       que guardamos en el estado (nombre, precio, imagen, etc.)          
      */}
    <ItemDetail
    key={data.id}
    img={data.img}
    title={data.title}
    categoria={data.category}
    precio={data.price}
    />
    </div>
  );
}

export default ItemDetailContainer;