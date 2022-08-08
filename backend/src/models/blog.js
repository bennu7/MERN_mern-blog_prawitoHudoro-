const monggose = require("mongoose");
const Schema = monggose.Schema;

const BlogPost = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    //   image: {
    //     typpe: String,
    //     required: true,
    //   },
    body: {
      type: String,
      required: true,
    },
    author: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = monggose.model("BlogPost", BlogPost);
