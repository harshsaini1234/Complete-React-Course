import React from 'react'

const Product = ({name,price,color,data={}}) => {
   
  return (
   <div>
    <h1>Product - {name}</h1>
    <h1>price - {price}</h1>
    <h1>color- {color}</h1>
    {data.ram && (
      <>
        <p>Ram - {data.ram}</p>
        <p>ROM - {data.rom}</p>
        <p>Chipset - {data.chipset}</p>
      </>
    )   
    }
   </div>
    
  )
}

export default Product
