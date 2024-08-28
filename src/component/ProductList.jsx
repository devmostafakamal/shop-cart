import { useContextElement } from "./Context/CartContext";

const ProductList = () => {
  const { products, addToCart } = useContextElement();
  return (
    <div>
      <h2>Products</h2>
      {products.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <span> - ${item.price}</span>
          <button onClick={() => addToCart(item)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
