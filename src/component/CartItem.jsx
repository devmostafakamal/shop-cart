import React from "react";
import { useContextElement } from "./Context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, addToCart } = useContextElement();
  return (
    <li>
      <span>{item.name}</span>{" "}
      <button onClick={() => removeFromCart(item)}>-</button>
      <span>{item.qty}</span> <button onClick={() => addToCart(item)}>+</button>
      <span>-${item.price * item.qty}</span>
    </li>
  );
};
export default CartItem;
