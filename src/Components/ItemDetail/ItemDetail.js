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
    <div>

            
          
        </div>
  )
}

export default ItemDetail