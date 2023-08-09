const express = require("express");

const router = express.Router();
const { addToCart, getCartContents } = require("../../controllers/api/cart");

router.post("/:id/", addToCart);
router.get("/", getCartContents);

module.exports = router;
