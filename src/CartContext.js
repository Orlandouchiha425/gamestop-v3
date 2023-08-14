import { createContext, useState, useEffect } from "react";
import { findOnegameById } from "./utilities/apiRoutes/games-api";
import { useParams } from "react-router-dom";
export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
  getProductData: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [data, setData] = useState([]);

  let { id } = useParams();
  const getOneGameOnly = async () => {
    try {
      const response = await findOnegameById(id);
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getOneGameOnly();
  }, []);

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function getProductData(id) {
    let productData = data.find((product) => product.id === id);
    if (productData === undefined) {
      console.log("Product does not exists" + id);
    }
    return productData;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      // Add the game details to the cartProducts array
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
          //   price: gameData.price, // Add the price from gameData
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.forEach((cartItem) => {
      const productPrice = cartItem.quantity * cartItem.price;
      totalCost += productPrice;
    });
    return totalCost;
  }

  const contextValue = {
    items: cartProducts, // Change 'item' to 'items'
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
    getProductData,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
export default CartProvider;
