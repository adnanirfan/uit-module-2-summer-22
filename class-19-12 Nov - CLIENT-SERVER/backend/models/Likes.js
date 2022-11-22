const mongoose = require("mongoose");

const LikesSchema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "users",
    required: true,
  },
  book: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "books",
    required: true,
  },
});

const Likes = mongoose.model("likes", LikesSchema);

module.exports = Likes;
