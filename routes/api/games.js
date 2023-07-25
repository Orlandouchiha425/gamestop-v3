const express = require("express");

const router = express.Router();
const {
  findAllGames,
  findOneGameById,
  deleteGames,
  createGames,
  editGame,
  findClearanceGames,
} = require("../../controllers/api/Games");

router.get("/clearance", findClearanceGames);

router.get("/", findAllGames);

router.post("/", createGames);
//Update route
router.put("/:id", editGame);
//delete
router.delete("/:id", deleteGames);

// this gets a game only
router.get("/:id", findOneGameById);


module.exports = router;
