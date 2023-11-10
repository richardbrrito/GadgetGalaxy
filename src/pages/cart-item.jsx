import React from "react";
import MenuItem from '../utils/MenuItem';





export const CartItem = (props) => {
  const { id , name, price, detail, image } = props.data
  return <div className="cartItem">
    <img src={image}/> 
    <div className="description">
      <p>
        {" "}
        <b>{name}</b>
      </p>
      <p>
        ${price}
      </p>
    </div>
    {" "}
  </div>
}