import Button from "../Button/Button";
import "../Card/card.css";
import ItemCount from "../ItemCount/ItemCount";
import {useState} from "react";
import Swal from "sweetalert2";
import{Link} from "react-router-dom";

function ItemDetail({id, title, price, img, category, stock}) {

  const [quantityInCart, setQuantityInCart] = useState(0)

  function handleAdd(cantidad){
  console.log("agregar al carrito", cantidad)
  setQuantityInCart(cantidad)
  Swal.fire({
    position: 'top-end',
    icon: 'succes',
    title:`Has agregado ${cantidad}, de ${title} al carrito`,
    showConfirmButton: false,
    timer: 1500
  })
}

  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="imagen" />
      </div>
      <div className="card-detail">
        <h2>{title}</h2>
        <p>{category}</p>
        <h3>$ {price}</h3>
        <Button text="Ver más" />
      </div>
      {quantityInCart === 0?
      <ItemCount 
      initial={1} 
      stock={stock} 
      onAdd={handleAdd} 
      text={"Finalizar"}
      />
      : <Link to="/cart">Ir al carrito</Link>
}
    </div>
  );
}

export default ItemDetail;