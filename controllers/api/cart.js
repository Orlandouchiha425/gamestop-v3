const Games = require("../../models/Cart");

const addToCart = async (req, res) => {
  const gameId = req.params.id;
  const quantity = req.body.quantity;
  try {
    const game = await Games.findById(gameId);
    if (!game) {
      return res.status(404).json({ error: "Game Not Found" });
    }
    if (game.quantity < quantity) {
      return res.status(400).json({ error: "this item is not available" });
    }
    //updating the quantity
    game.quantity -= quantity;
    await game.save();
    res.json({ message: "your game has been added to cart", cartItem: game });
  } catch (error) {
    console.error("error, unable to add item to cart", error);
    res.status(400).json({ error: "unable to add game to cart" });
  }
};

const getCartContents = async (req, res) => {
  const userId = req.user._id;
  try {
    const cartItems = await Cart.find({ user: userId })
      .populate("game", "title price")
      .exec();

    res.json({ cartItems });
  } catch (error) {
    console.error("Error fetching cart contents:", error);
    res.status(500).json({ error: "Unable to fetch cart contents" });
  }
};

module.exports = {
  addToCart,
  getCartContents,
};
