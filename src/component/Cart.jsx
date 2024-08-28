import CartItem from "./CartItem";
import { useContextElement } from "./Context/CartContext";

const Cart = () => {
  const { cartItems } = useContextElement();
  const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  return (
    <div>
      Cart
      {cartItems.length === 0 && <div> cart is empty</div>}
      <ol>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ol>
      {cartItems.length !== 0 && (
        <>
          <hr />{" "}
          <div>
            <strong>Total price:${totalPrice}</strong>
          </div>
        </>
      )}
    </div>
  );
};
export default Cart;
