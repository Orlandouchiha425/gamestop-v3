import { sendRequest } from "../send-request";

const BASE_URL = "/api/cart";

export async function addToCart(gameId, cartData) {
  return sendRequest(`${BASE_URL}/${gameId}`, "POST", cartData);
}

export async function getCartContents() {
  return sendRequest(BASE_URL);
}
