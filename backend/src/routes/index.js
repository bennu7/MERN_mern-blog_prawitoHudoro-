const express = require("express");
const router = express.Router();
const userRoute = require("./users");
const productRoute = require("./product");

// handle untuk error CORS
router.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATH, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

router.use("/api/v1/users", userRoute);
router.use("/api/v1/products", productRoute);

module.exports = router;
