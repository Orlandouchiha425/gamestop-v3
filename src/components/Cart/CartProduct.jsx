import React from "react";
import { CartContext } from "../../CartContext";
import { useContext } from "react";

function CartProduct({ id }) {
  const cart = useContext(CartContext);
  const productData = cart.getProductData(id);

  if (!productData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h3>{productData.title}</h3>
      <p>{productData.quantity} total</p>
      <hr />
    </>
  );
}

export default CartProduct;
