const Games = require("../../models/Games");

const createGames = async (req, res) => {
  try {
    const body = req.body;
    const createGames = await Games.create(body);
    res.status(200).json({ message: "Created Game", createGames });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const findAllGames = async (req, res) => {
  try {
    const foundGames = await Games.find({});
    res.status(200).json(foundGames);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const findClearanceGames = async (req, res) => {
  try {
    const foundGames = await Games.find({ clearance: true });
    res.status(200).json(foundGames);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteGames = (req, res) => {
  Games.findByIdAndDelete(req.params.id, (err) => {
    if (!err) {
      res.status(200).json({ message: "Deleted Game" });
    } else {
      res.status(200).json({ err: err.message });
    }
  });
};

const findOneGameById = (req, res) => {
  Games.findById(req.params.id, (error, games) => {
    if (!error) {
      res.status(200).json({ message: "Showing One Game" });
    } else {
      res.status(400).json(error);
    }
  });
};

const editGame = (req, res) => {
  const body = req.body;
  Games.findByIdAndUpdate(
    req.params.id,
    body,
    { new: true },
    (error, upatedGame) => {
      if (!error) {
        res.status(200).json(upatedGame);
      } else {
        res.status(400).json(error);
      }
    }
  );
};

module.exports = {
  findAllGames,
  findClearanceGames,
  deleteGames,
  findOneGameById,
  editGame,
  createGames,
};
