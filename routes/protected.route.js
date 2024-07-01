const express = require("express")
const router = express.Router();

const {
    addProduct,
    deleteProduct
  } = require("../controllers/protected.controller");
  

router.post("/", addProduct);
router.delete("/:productId", deleteProduct);



module.exports = router;