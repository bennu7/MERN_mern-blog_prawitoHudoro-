const { validationResult } = require("express-validator");
const BlogPost = require("../models/blog");

exports.createBlogPost = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const err = new Error("Input value tidak sesuai");
      err.errorStatus = 400;
      err.data = errors.array(); //errors.array() akan dilooping jika lebih dari 1 error
      throw err;
    }

    if (!req.file) {
      const err = new Error("Image harus di upload");
      err.errorStatus = 400;
      err.data = errors.array();
      throw err;
    }

    const { title, body } = req.body;
    const image = req.file.path;

    console.log("image file path => ", image);
    // const { image } = req.file;

    const Posting = await BlogPost.insertMany([
      {
        title,
        body,
        image,
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
