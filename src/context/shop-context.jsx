import React, { createContext, useState } from 'react'
import MenuList from "../utils/MenuList.json";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {}
  MenuList.forEach(item => {
    cart[item.id] = 0; // Using the 'id' from each item
  });
  return cart
}

export const ShopContextProvider = (props) =>{
  /*Define all states and pass the state to the provider which can be accessed in cart and shop */
  const[cartItems, setCartItems] = useState(getDefaultCart());
  
  const addToCart= (itemId) =>{
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  }
  const removeFromCart= (itemId) =>{
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }



  const contextValue = {cartItems, addToCart, removeFromCart}

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
  
}