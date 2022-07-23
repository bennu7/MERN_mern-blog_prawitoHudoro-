exports.register = (req, res, nect) => {
  const { name, email, password } = req.body;

  const result = {
    message: "Register Success",
    data: {
      uid: 1,
      name,
      email,
      password,
    },
  };

  res.status(201).json({
    ...result,
  });
};
