import React, { useState, useEffect } from "react";
// import ItemDetail from "./ItemDetail";
import itemsData from "../../data/item";
import { useParams } from "react-router-dom"
 
const ItemDetailContainer = () => {
  /* Crear un estado para guardar un objeto/item/producto */
  const [item, setItem] = useState({})
  // const Id = useParams().id
 const idURL = useParams().id

  /* Crear un EFFECTO para cargar en el montaje  */

 function traerProducto() {
  return new Promise((resolve, reject) => {
    let itemRequested = itemsData.find ( elemento => elemento.id == idURL)
    if(itemRequested === undefined)
      reject ("No encontramos el item")
    else
      resolve(itemRequested)
    // setTimeout(() => {
    //   resolve(itemsData[id])}, 2000);
    })
  
}

  useEffect(() => {
    traerProducto()
      .then((respuesta) =>setItem(respuesta))
      .catch((error) => alert(error))
  }, [])

    return (
      <div className="card">
      <div className="card-img">
        <img src={item.img} alt="imagen" />
      </div>
      <div className="card-detail">
        <h2>{item.title}</h2>
        <p>{item.category}</p>
        <h3>$ {item.price}</h3>
        {/* <Button type text="Ver más"></Button> */}
      </div>
    </div>










      // desafio
    // <div className="main">
    //   {/* Crear componente ItemDetail y enviarle por props los datos del producto
    //    que guardamos en el estado (nombre, precio, imagen, etc.)          
    //   */}
    // <ItemDetail
    // key={data.id}
    // img={data.img}
    // title={data.title}
    // categoria={data.category}
    // precio={data.price}
    // />
    // </div>
  );
}

export default ItemDetailContainer;