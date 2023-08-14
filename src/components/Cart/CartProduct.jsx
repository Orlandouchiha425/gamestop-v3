import React from "react";
import { CartContext } from "../../CartContext";
import { useContext } from "react";
function CartProduct({ data, setData }) {
  const cart = useContext(CartContext);

  if (!data) {
    return <p>Loading...</p>;
  }
  const quantity = data.quantity;
  const productData = cart.getProductData(data._id);
  return (
    <>
      <h3>{productData.title}</h3>
    </>
  );
}

export default CartProduct;
