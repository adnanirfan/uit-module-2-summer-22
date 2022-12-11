const mongoose = require("mongoose");

const BooksSchema = new mongoose.Schema({
  title: String,
  author: String,
  publisher: String,
  image: String,
  stock: Number,
  availableBooks: Number,
  ratings: Number, // Total Average Rating
  // price: Number,
});

const Books = mongoose.model("books", BooksSchema);

module.exports = Books;
