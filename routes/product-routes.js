const express = require("express");
const productControllerSql = require("../controllers/product-controller");
const productControllerMongo = require("../controllers/product-controller-mongo");

const router = express.Router();

router.post('/create-sql',productControllerSql.createProduct)
router.post('/create-mongo',productControllerMongo.createProduct)
module.exports = router;