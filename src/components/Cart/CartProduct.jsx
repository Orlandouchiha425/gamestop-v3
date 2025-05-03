import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../CartContext";

function CartProduct({ id }) {
  const cart = useContext(CartContext);
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) {
      console.warn("CartProduct received an undefined ID.");
      setError(true);
      return;
    }

    async function fetchData() {
      try {
        console.log("Fetching product data for ID:", id);
        const data = await cart.getProductData(id);
        if (data && data.price != null && data.title) {
          setProductData(data);
        } else {
          console.warn("Product data incomplete or not found:", data);
          setError(true);
        }
      } catch (err) {
        console.error("Failed to fetch product data:", err);
        setError(true);
      }
    }

    fetchData();
  }, [id, cart]);

  if (error)
    return (
      <p style={{ color: "red" }}>
        Failed to load product info (ID: {id || "Unknown"})
      </p>
    );
  if (!productData) return <p>Loading product {id}...</p>;

  const quantity = cart.getProductQuantity(id);
  const total = isNaN(productData.price * quantity)
    ? "N/A"
    : (productData.price * quantity).toFixed(2);

  return (
    <>
      <h3>{productData.title || "Untitled Game"}</h3>
      <p>{quantity} in cart</p>
      <p>Total: ${total}</p>
      <hr />
    </>
  );
}

export default CartProduct;
