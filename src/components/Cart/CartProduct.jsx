import React from "react";
import { CartContext } from "../../CartContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
function CartProduct({ data, setData }) {
  let { id } = useParams();

  const cart = useContext(CartContext);

  if (!data) {
    return <p>Loading...</p>; // Add loading indicator or handle loading state
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
