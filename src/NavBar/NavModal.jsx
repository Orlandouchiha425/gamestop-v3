import React from "react";
import CartProduct from "../components/Cart/CartProduct";
import { CartContext } from "../CartContext";
import { useContext } from "react";
function NavModal() {
  const cart = useContext(CartContext);
  console.log(cart);

  const productsCount =
    cart.items.length > 0
      ? cart.items.reduce((sum, product) => sum + product.quantity, 0)
      : 0;

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Cart ({productsCount} Items)
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Shopping Cart
              </h5>

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {productsCount > 0 ? (
                <>
                  <p>Items in your cart:</p>

                  {cart.items.map((currentProduct, idx) => (
                    <CartProduct key={idx} />
                  ))}
                  <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                  {/* <button className="btn btn-success" onClick={checkout}>
                    Purchase items!
                  </button> */}
                </>
              ) : (
                <h1>There are no items in your cart!</h1>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavModal;
