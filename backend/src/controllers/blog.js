const { validationResult } = require("express-validator");
const BlogPost = require("../models/blog");
const { promisify } = require("util");
const fs = require("fs");
const unlinkFrom = promisify(fs.unlink);

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
      return res.sendJson(422, false, "Image harus di upload");
    }

    const { title, body } = req.body;
    const image = req.file.path;

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
    console.log("err => ", err);
    return res.status(500).json({
      status: false,
      message: err.message,
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
    console.log("err => ", err);
    return res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

exports.getBlogById = async (req, res, next) => {
  try {
    const id = req.params.id;

    console.log("id => ", id);

    const data = await BlogPost.findById(id);

    if (!data) {
      res.status(404).json({
        status: false,
        message: "id not found",
        data: null,
      });
    }

    res.status(200).json({
      status: true,
      data,
    });
  } catch (err) {
    console.log("err => ", err);
    return res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

exports.updateBlogById = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const err = new Error("Input value tidak sesuai");
      err.errorStatus = 400;
      err.data = errors.array(); //errors.array() akan dilooping jika lebih dari 1 error
      throw err;
    }
    const { title, body } = req.body;
    let image = req.file;
    const { id } = req.params;

    console.log("id => ", id);
    console.log("image => ", image);

    if (image) {
      const data = await BlogPost.findById(id);
      if (!data) {
        return res.sendNotFound("id tidak ditemukan");
      }
      // hapus dulu file sebelumnya sebelum di update
      unlinkFrom(data.image);
    }

    await BlogPost.findByIdAndUpdate(id, {
      title,
      body,
      image: image.path,
    })
      .then(async (result) => {
        return res.sendJson(200, true, "update success", {
          title: result.title,
          body: result.body,
          image: result.image,
        });
      })
      .catch((result) => {
        return res.sendNotFound("id data not found", result);
      });

    // res.sendJson(200, true, "update success", updated);
  } catch (err) {
    console.log("err => ", err);
    return res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};
