const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const userschema = new Schema(
  {
    Phone: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    first: {
      type: String,
    },
    last: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userschema);
module.exports = User;
