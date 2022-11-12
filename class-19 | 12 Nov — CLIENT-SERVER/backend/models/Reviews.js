const mongoose = require("mongoose");

const ReviewsSchema = new mongoose.Schema({
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
  comment: String,
  rating: Number,
});

const Reviews = mongoose.model("reviews", ReviewsSchema);

module.exports = Reviews;
