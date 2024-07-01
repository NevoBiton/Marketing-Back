

const Product = require("../models/product.model");


const fs = require("fs");

async function getProductsCount(req, res) {
  const {query} = req
  const productsParams = buildCreiteria(query)
  

    try {
      const count = await Product.countDocuments(productsParams)
      res.json({ count });
    } catch (err) {
      console.log(
        "product.controller, getProductCount. Error while getting Products count",
        err
      );
      res.status(500).json({ message: err.message });
    }
  } 

  function buildCreiteria(query) {
    const cretiria = {};

    if (query.name) {
      cretiria.name = { $regex: query.name, $options: "i"}
    }
    if (query.minPrice) {
      cretiria.price = { $gte: query.minPrice }
    }
    if (query.maxPrice) {
      if(!query.minPrice) {
        cretiria.price = {}
      }
      cretiria.price.$lte = query.maxPrice
    }
    if (query.inStock === "true") {
      cretiria.quantity = { $gt: 0 };
    }
    return cretiria
  }

  async function getProducts(req, res) {
    const {query} = req
    const productsParams = buildCreiteria(query)
    const page = query.page || 1;
    const limit = query.limit || 6;
    const pageIndex = (page - 1) * limit || 0

    try {
      const products = await Product.find(productsParams).skip(pageIndex).limit(limit)
      res.status(200).json(products)
      
    } catch (err) {
      console.log("product.controller, getProducts. Error while getting products", err);
      res.status(500).json({ message: err.message });
    }
  }

  async function getUserProducts(req, res) {
    const { userId } = req.params;
    const { page = 1, limit = 6 } = req.query;

    try {
        const productsParams = { user: userId };  // Assuming 'owner' field holds user ID

        const totalProducts = await Product.countDocuments(productsParams);
        const products = await Product.find(productsParams)
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        res.status(200).json({ total: totalProducts, products });
    } catch (err) {
        console.error("Error fetching user products:", err);
        res.status(500).json({ message: "Server error while fetching products" });
    }
}


  async function getProductById(req, res) {
    const { id } = req.params;
    try {
      const product = await Product.findById(id);
      res.json(product);
    } catch (err) {
      if (err.name === "CastError") {
        console.log(
          `product.controller, getProduct. Product not found with id: ${id}`
        );
        return res.status(404).json({ message: "Product not found" });
      }
      console.log(
        `Product.controller, getProductById. Error while getting Product with id: ${id}`,
        err.name
      );
      res.status(500).json({ message: err.message });
    }
  }


// async function deleteProduct(req, res) {
//   const { id } = req.params;
//   try {
//     const deletedProduct = await Product.findByIdAndDelete(id);

//     if (!deletedProduct) {
//       console.log(
//         `product.controller, deleteProduct. Product not found with id: ${id}`
//       );
//       return res.status(404).json({ message: "Product not found" });
//     }

//     res.json({ message: "Product deleted" });
//   } catch (err) {
//     console.log(
//       `product.controller, deleteProduct. Error while deleting product with id: ${id}`
//     );
//     res.status(500).json({ message: err.message });
//   }
// }

async function editProduct(req, res) {
  const { id } = req.params;
  const { name, category, price } = req.body;

  try {
    const updateProduct = await Product.findByIdAndUpdate(
      id,
      { name, category, price },
      { new: true, runValidators: true } // validate before updating
    );

    if (!updateProduct) {
      console.log(
        `product.controller, editProduct. Product not found with id: ${id}`
      );
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updateProduct);
  } catch (err) {
    console.log(
      `product.controller, updateProduct. Error while updating product with id: ${id}`,
      err
    );

    if (err.name === "ValidationError") {
      // Mongoose validation error
      console.log(`product.controller, updateProduct. ${err.message}`);
      res.status(400).json({ message: err.message });
    } else {
      // Other types of errors
      console.log(`product.controller, updateProduct. ${err.message}`);
      res.status(500).json({ message: "Server error while updating product" });
    }
  }
}

    


  

module.exports = {
    getProducts,
    getProductById,
    // deleteProduct,
    editProduct,
    getProductsCount,
    getUserProducts
  };