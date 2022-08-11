import React from 'react'
// import Card from '../Card/CardWhitObject'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function ItemDetail({img, title, price, category }) {
    Swal.fire({
        title:{title},
        text:{price},
        imageUrl:{img},
        imageWidth:400,
        imageHeight:200,
        imageAlt:"Custom image"
        })   
 
    return (
        
            // props.item.map( (singleMovie) => {
            //   return (
    <div>
        <div className="cards">
        <img className="itemImg" src={img} alt=""/>
        <h2 className="itemNombre">{title}</h2>
        <h2 className="itemPrecio">${price}</h2>
        <h1 className="itemPrecio">{category}</h1>
        </div>
        
        <h3>{price}</h3>
   
    </div>
    )}


export default ItemDetail