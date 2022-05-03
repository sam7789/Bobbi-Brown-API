const mongoose = require("mongoose");

// Creating Product Schema:-

const productSchema = new mongoose.Schema(
  {
    Image: { type: String, required: true },
    name: { type: String, required: true },
    tag: { type: String, required: true },
    price: { type: Number, required: true },
    page: { type: String, required: false },
  },
  {
    versionKey: false,
  }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
