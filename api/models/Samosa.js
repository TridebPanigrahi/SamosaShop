const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SomosaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    enums: ["Red", "Yellow", "Green", "Brown"],
    default: "Yellow",
  },
  size: {
    type: String,
    enums: ["Small", "Medium", "large"],
    default: "Medium",
  },
  type: {
    type: String,
    enums: ["Veg", "Non Veg", "Mixed"],
    default: "Mixed",
  },
  status: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
});

const samosa = mongoose.model("samosa", SomosaSchema);
module.exports = samosa;
