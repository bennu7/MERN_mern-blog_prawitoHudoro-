const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog");
// middleware untuk check validator
const { body } = require("express-validator");

router.post(
  "/",
  body("title").isLength({ min: 5 }).withMessage("input title tidak sesuai"),
  body("body").isLength({ min: 5 }).withMessage("input body tidak sesuai"),
  blogController.createBlogPost
);

router.get("/", blogController.getAllBlogPost);
router.get("/:id", blogController.getBlogById);
router.put(
  "/:id",
  body("title").isLength({ min: 5 }).withMessage("input title tidak sesuai"),
  body("body").isLength({ min: 5 }).withMessage("input body tidak sesuai"),
  blogController.updateBlogById
);
router.delete("/:id", blogController.deleteBlogById);

module.exports = router;
