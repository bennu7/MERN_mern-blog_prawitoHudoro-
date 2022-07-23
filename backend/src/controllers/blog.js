exports.createBlogPost = (req, res, next) => {
  const { title, body } = req.body;

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
