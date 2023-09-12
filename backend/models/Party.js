const mongoose = require("mongoose");

const { Schema } = mongoose;

const { serviceSchema } = require("./Service");

const partySchema = new Schema(
  {
    title: {
      type: String,
      reqired: true,
    },
    author: {
      type: String,
      reqired: true,
    },
    description: {
      type: String,
      reqired: true,
    },
    budget: {
      type: Number,
      reqired: true,
    },
    image: {
      type: String,
      reqired: true,
    },
    services: {
      type: [serviceSchema],
    },
  },
  { timestamps: true }
);

const Party = mongoose.model("Party", partySchema);

module.exports = Party;
