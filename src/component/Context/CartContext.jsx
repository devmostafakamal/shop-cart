import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export const useContextElement = () => {
  return useContext(cartContext);
};

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (product) => {
    // Check if the product exists in the cart
    const exist = cartItems.find((item) => item.id === product.id);

    if (exist) {
      // If the quantity is 1, remove the item from the cart
      if (exist.qty === 1) {
        // Filter out the item from the cart
        setCartItems(cartItems.filter((item) => item.id !== product.id));
      } else {
        // Otherwise, decrement the quantity of the item
        setCartItems(
          cartItems.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty - 1 } : item
          )
        );
      }
    }
  };

  const addToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  return (
    <cartContext.Provider
      value={{ products, cartItems, removeFromCart, setCartItems, addToCart }}
    >
      {children}
    </cartContext.Provider>
  );
};
