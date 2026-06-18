import React from "react";
import "./Product.css";
const Product = ({ name, price, color, data = {} }) => {
  //Internal CSS in React using style attribute
  const myStyle ={
    backgroundColor: "yellow",
    color: "black",
    padding: "10px",
    margin: "10px",
    border: "1px solid blue",
    borderRadius: "10px",
  }
  return (
    // Inline styling in react using style attribute
    <div
      // style={{
      //   backgroundColor: "blue",
      //   padding: "10px",
      //   margin: "10px",
      //   border: "1px solid yellow",
      //   borderRadius: "10px",
      // }}
      //Internal CSS in React using style attribute
      // style={myStyle}
     // External CSS in React using className attribute
     className="con"
      // className="container"
    >
      <h1>Product - {name}</h1>
      <h1>price - {price}</h1>
      <h1>color- {color}</h1>
      {data.ram && (
        <>
          <p>Ram - {data.ram}</p>
          <p>ROM - {data.rom}</p>
          <p>Chipset - {data.chipset}</p>
        </>
      )}
    </div>
  );
};

export default Product;
