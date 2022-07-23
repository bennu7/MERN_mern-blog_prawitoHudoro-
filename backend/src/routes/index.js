const express = require("express");
const router = express.Router();
const userRoute = require("./users");
const productRoute = require("./product");

router.use("/api/v1/users", userRoute);
router.use("/api/v1/products", productRoute);

module.exports = router;
