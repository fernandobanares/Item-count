import React from 'react'
import Card from '../Card/Card'


const ItemList =(props) =>{
  return (
    <div>{
    props.item.map( (singleMovie) => {
      return (
      <Card
        key={singleMovie.id}
        id={singleMovie.id}
        title={singleMovie.title}
        category={singleMovie.category}
        img={singleMovie.img}
        price={singleMovie.price}
      />
      )
      })}
    </div>
  )
}

export default ItemList