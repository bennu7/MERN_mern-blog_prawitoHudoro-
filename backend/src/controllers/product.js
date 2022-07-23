exports.createProduct = (req, res, next) => {
  console.log("req.body: ", req.body);
  res.json({
    status: true,
    message: "hello world from product",
    data: null,
  });
  next();
};

exports.getAllProducts = (req, res, next) => {
  res.json({
    status: true,
    message: "hello world from product",
    data: null,
  });
  next();
};

exports.updateProduct = (req, res, next) => {
  res.json({
    status: true,
    message: "hello world from product",
    data: null,
  });
  next();
};

exports.deleteProduct = (req, res, next) => {
  res.json({
    status: true,
    message: "hello world from product",
    data: null,
  });
  next();
};
