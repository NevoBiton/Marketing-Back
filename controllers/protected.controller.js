const Product = require("../models/product.model")
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;



async function addProduct(req, res) {
  const { name, categories, price, quantity } = req.body;

  try {
    const userId = req.userId;
    const newProduct = new Product({
      name,
      categories,
      price,
      quantity,
      user: userId, // Associate the userId with the product
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error("Error while adding product:", err);
    res.status(500).json({ message: "Server error while adding product" });
  }
}


async function deleteProduct(req, res) {
  const { productId } = req.params;
  const userId = req.userId;

  try {
    const deletedProduct = await Product.findOneAndDelete({
      _id: productId,
      user: userId,
    });

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted" });
  } catch (err) {
    console.error("Error while deleting product:", err);
    res.status(500).json({ message: "Server error while deleting product" });
  }
}

module.exports = {
  addProduct,
  deleteProduct,
};