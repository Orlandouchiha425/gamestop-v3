const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gamesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    genre: { type: String, required: true },
    platform: { type: String, required: true },
    clearance: { type: Boolean },
    img: String,
    pokemon: Boolean,
    releaseDate: { type: Date, required: true },
    publisherInformation: {
      type: Schema.Types.Mixed,
      required: true,
    },
    rating: Number,
    quantity: Number,
    cart: {
      quantity: { type: Number, default: 0 },
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Games", gamesSchema);
