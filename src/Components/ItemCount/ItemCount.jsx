import React, {useState} from 'react';

function ItemCount(props){
// console.log(props.stock);/* Valor máximo del contador */
  const [cantidad, setCantidad] = useState(props.initial);
  
  const handleIncrement = () =>{
    if (cantidad < props.stock){
        setCantidad (cantidad + 1);
    } else {
        alert("Ya no hay mas stock")
    }
  }

  const handleDecrement = () =>{
    if (cantidad > props.initial){
        setCantidad (cantidad - 1);
    } else {
        alert("No puedes llevar comprar menos de 1 producto")
    }
  }

//   const onAdd = () => {
//     if (props.stock > 0) {
//       alert(`Agregaste ${cantidad} unidades al carrito.`)
//   }
//   else {
//       alert(`No hay suficiente stock de este producto.`)
//   }
// }
// const handleClick = () => {
//   props.onAdd(cantidad)
// }

  return(
    <div>
      <h3>Click Counter</h3>
      <button onClick={handleIncrement}>+</button>
      {/* <button onClick={ ()=>setClicks(0)}>Reset</button> */}
      <span>{cantidad}</span>
      <button onClick={handleDecrement}>-</button>
      <button onClick={props.onAdd}>{props.text}</button>
      {/* <h3>Clicks: {cantidad}</h3> */}

    </div>
  )

  }
export default ItemCount;
