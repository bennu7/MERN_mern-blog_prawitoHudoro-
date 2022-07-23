var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log("url: " + req.originalUrl);
  console.log("method : " + req.method);
  console.log("request : ", req);
  // res.status(200).json({
  //   status: true,
  //   message: "hello world from users",
  //   data: null,
  // });
});

module.exports = router;
