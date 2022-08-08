const { validationResult } = require("express-validator");
const BlogPost = require("../models/blog");

exports.createBlogPost = async (req, res, next) => {
  try {
    const { title, body } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const err = new Error("Input value tidak sesuai");
      err.errorStatus = 400;
      err.data = errors.array(); //errors.array() akan dilooping jika lebih dari 1 error
      throw err;
    }

    const Posting = await BlogPost.insertMany([
      {
        title,
        body,
        author: {
          uid: 1,
          name: "lalu ibnu",
        },
      },
    ]);

    res.status(201).json({
      status: true,
      message: "Create Blog Post Success",
      Posting,
    });

    // Posting.save()
    //   .then((result) => {

    //   })
    //   .catch((err) => {
    //     console.log("err : ", err);
    //   });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: err,
    });
  }
};

exports.getBlogPost = async (req, res, next) => {
  try {
    const data = await BlogPost.find();

    res.status(200).json({
      status: true,
      data,
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: err,
    });
  }
};
