
// Component Creation in React using Arrow Function rafc
import React from 'react'
import Product from './components/Product'
import Item from './components/Item'

function App() {
  const obj ={
    ram : "8GB",
    rom : "128GB",
    chipset:"Snapdragon 888"
  }
   
  
  return (  
    <>            
    <Product name = "Iphone" price = {70000} color = "Blue" data={obj} />
     <Product name = "Vivo" price = {30000} color = "black"  />
     <Item />
    </>
    
  )
}

export default App
