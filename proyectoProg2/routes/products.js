const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsControllers");

router.get("/", productsController.products);
router.get("/detail/:id", productsController.productDetail);
router.get("/product-add", productsController.showFormAdd);
router.get("/search", productsController.search);

router.post("/product-add", productsController.productAdd);


module.exports = router;