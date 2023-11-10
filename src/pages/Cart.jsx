import React, {useContext} from "react";
import MenuList from "../utils/MenuList.json";
import { CartItem } from "./cart-item";
import { ShopContext } from '../context/shop-context';




export const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  return <div className="cart">
    <div>
    <h1 className="menuTitle"> Your Cart Items</h1>
    </div>
    <div className="cartItems">
    {MenuList.map((product) => {
          if (cartItems[product.id] > 0) {
            return <CartItem key={product.id} data={product} />;
          }
          return null; // Return null for products not in the cart
        })}

    </div>
  </div>
}