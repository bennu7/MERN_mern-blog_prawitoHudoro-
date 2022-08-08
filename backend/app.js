require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./src/routes/index");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");

const app = express();
const response = require("./src/helpers/response");

const fileStorage = multer.diskStorage({
  // cb = callback
  destination: (req, file, cb) => {
    //parameter pertama null => success errornya tidak ada, parameter kedua "images" => lokasi file image
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().getTime() + "-" + file.originalname.split(" ").join("-")
    );
  },
});

const fileFilter = (req, file, cb) => {
  // filter hanya image saja yang boleh di upload, buka file pdf dll
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    // prosesnya diterima dan dilanjutkan jika memnuhi kriteia tersebut
    cb(null, true);
  } else {
    // jika tidak terpenuhi maka beri false
    cb(null, false);
  }
};

app.use(bodyParser.json());
// handle images middleware for get images
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("images")
);
const { PORT } = process.env;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(response);
// app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.use((error, req, res, next) => {
  const status = error.errorStatus || 500;
  const message = error.message;
  const data = error.data;

  res.status(status).json({
    message: message,
    data: data,
  });
});

mongoose
  .connect("mongodb://127.0.0.1:27017/mern-blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connect to mongodb in port :", PORT);
  })
  .catch((err) => {
    console.log("failed connect to mongodb : ", err);
  });

module.exports = app;
