const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const blogschema = new Schema(
  {
    categ: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    Ingredients: {
      type: String,
    },
    recipe: {
      type: String,
      required: true,
    },
    thumb: {
      type: String,
    },
    roll: {
      type: String,
    },
    comments: {
      type: Array,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogschema);
module.exports = Blog;
