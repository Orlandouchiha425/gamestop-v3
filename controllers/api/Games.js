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

const findAllGames = (req, res) => {
  Games.find({}, (err, foundGames) => {
    if (!err) {
      res.status(200).json({ message: "Found all Games!" });
    } else {
      res.status(400).json({ message: err.message });
    }
  });
};

const findClearanceGames = (req, res) => {
  Games.find({ clearance: true }, (err, foundGames) => {
    if (!err) {
      res.status(200).json(foundGames);
    } else {
      res.status(400).json({ message: err.message });
    }
  });
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
