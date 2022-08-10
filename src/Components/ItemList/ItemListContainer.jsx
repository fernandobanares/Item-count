import React, { useState, useEffect } from "react";
import itemsData from "../../data/item";
import ItemList from "./ItemList";
// import Card from "../Card/Card";

function traerProductos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(itemsData), 2000);
  });
}

const ItemListContainer = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    traerProductos()
      .then((respuesta) => {
        setItem(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //console.log(products);

  return (
    <div className="container mx-auto mt-5">
      
      <ItemList item={item} />
      
     
      </div>
  );
};

export default ItemListContainer;