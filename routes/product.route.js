const express = require("express")
const router = express.Router();

const {
    getProductsCount,
    getProducts,
    getProductById,
    // deleteProduct,
    editProduct,
    getUserProducts
  } = require("../controllers/product.controller");
  

router.get("/", getProducts);
router.get("/count", getProductsCount);
router.get("/:id", getProductById);
// router.delete("/:id", deleteProduct);
router.put("/:id", editProduct);
router.get("/user/:userId", getUserProducts);


module.exports = router;