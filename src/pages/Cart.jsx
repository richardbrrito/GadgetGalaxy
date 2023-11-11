import React, {useContext} from "react";
import MenuList from "../utils/MenuList.json";
import { CartItem } from "./cart-item";
import { ShopContext } from '../context/shop-context';
import { useNavigate } from "react-router-dom";




export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()

  const navigate = userNavigate()
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
        {totalAmount > 0 ? (

         <div className="checkout">
          
          <p> Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate(<Products />)}> Continue Shopping </button>
          <button> Checkout </button>
        </div>
          ) : (
            <h1> Your Cart is Empty</h1>
          )}

    </div>
  </div>
  
}
