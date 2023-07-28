import { sendRequest } from "../send-request";

const BASE_URL = "/api/cart";

//Retrieve an unpaid order for the logged user
//This function is located in virtuals "../../models/order"

export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

//add an item to the cart
//This function is located in virtuals "../../models/order"
export function addGameToCart(gameId) {
  //just send item/game for best security (no pricing)
  //This may need to be changed to /cart/gameid
  return sendRequest(`${BASE_URL}/${gameId}`, "POST");
}
// Update the item's qty in the cart
// Will add the item to the order if not currently in the cart
// Sending info via the data payload instead of a long URL
//This function is located in virtuals "../../models/order"
//purpose of virtuals is to do calcualtations and dont keep this information in mongoose
//we need two variables according to out function in order models.
export function setItemQtyInCart(gameId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, "PUT", { gameId, newQty });
}

// export function checkout() {
//   //updates data to be true, originally was set to false in virtuals line 47ish
//   // Changing data on the server, so make it a POST request
//   return sendRequest(`${BASE_URL}/cart/checkout`, "POST");
// }

// export function history() {
//   return sendRequest(`${BASE_URL}/history`);
// }
