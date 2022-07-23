const { validationResult } = require("express-validator");

exports.createBlogPost = (req, res, next) => {
  const { title, body } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = new Error("Input value tidak sesuai");
    err.errorStatus = 400;
    err.data = errors.array(); //errors.array() akan dilooping jika lebih dari 1 error
    throw err;
  }

  const result = {
    message: "Create Blog Post Success",
    data: {
      id: 1,
      title,
      //   image: "",
      body,
      createdAt: new Date(),
      author: {
        uid: 1,
        name: "Testing",
      },
    },
  };

  res.status(201).json({
    ...result,
  });
};
