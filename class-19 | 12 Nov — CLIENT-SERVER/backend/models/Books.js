const mongoose = require("mongoose");

const BooksSchema = new mongoose.Schema({
  title: String,
  author: String,
  publisher: String,
  image: String,
  stock: Number,
  availabeBooks: Number,
  // price: Number,
  ratings: Number, // Total Average Rating
});

const Books = mongoose.model("books", BooksSchema);

module.exports = Books;
