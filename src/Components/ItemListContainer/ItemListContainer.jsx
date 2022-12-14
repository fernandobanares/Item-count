import React, { useState, useEffect } from "react";
import itemsData from "../../data/productos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom"
// import Card from "../Card/Card";

function traerProductos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(itemsData), 2000);
  });
}

const ItemListContainer = () => {
  const [item, setItem] = useState([]);

  const idCategory = useParams().idCategory

  useEffect(() => {
    traerProductos()
      .then((respuesta) => {
        let filtrados = respuesta.filter( elemento => elemento.category === idCategory)
        if (idCategory === undefined) {
        setItem(respuesta)
        }
        else{
        setItem(filtrados)
        }
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idCategory]);

  //console.log(products);

  return (
    <div className="ItemListContainer">
      
      <ItemList item={item} />
      
     
      </div>
  );
};

export default ItemListContainer;