import React, { useContext } from 'react';
import { ShopContext } from '../context/shop-context';



function MenuItem({ id , name, price, detail, image }) {

  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id]

  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1>${price}</h1>
      <h2>{name}</h2>
      <p>{detail}</p>
      <button className = "addToCartBttn" onClick ={() => addToCart(id)}>Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
    </div>
  );
}

export default MenuItem;
