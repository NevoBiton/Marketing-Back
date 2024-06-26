const mongoose = require("mongoose");

// Create a schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
 
  },
  { timestamps: true }
);

const Product = mongoose.model("Robot", productSchema);
module.exports = Product;
