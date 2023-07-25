const Games = require("../../models/Cart");

const cart = async (req, res) => {
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

module.exports = {
  cart,
};
