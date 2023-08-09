import React from "react";

function Cart({ cartItems }) {
  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {/* {cartItems.map((item) => (
          <li key={item._id}>
            {item.title} - Quantity: {item.quantity}
          </li>
        ))} */}
      </ul>
    </div>
  );
}

export default Cart;
