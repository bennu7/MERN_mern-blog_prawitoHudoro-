const express = require("express");
const router = express.Router();
const userRoute = require("./users");
const authRoute = require("./auth");
const blogRoute = require("./blog");

// handle untuk error CORS
router.use((req, res, next) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3030");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATH, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

router.use("/api/v1/users", userRoute);
router.use("/api/v1/auth", authRoute);
router.use("/api/v1/blog", blogRoute);

module.exports = router;
