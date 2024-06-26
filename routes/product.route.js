const express = require("express")
const router = express.Router();

const {
    getProductsCount,
    getProducts,
    getProductById,
    deleteProduct,
    addProduct,
    editProduct
  } = require("../controllers/product.controller");
  



router.get("/", getProducts);
router.get("/count", getProductsCount);
router.get("/:id", getProductById);
router.delete("/:id", deleteProduct);
router.post("/", addProduct);
router.put("/:id", editProduct);

module.exports = router;