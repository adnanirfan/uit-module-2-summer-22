const Books = require("../models/Books");

// Add New book
const book_create = async (req, res) => {
  try {
    console.log(req.body);
    const books = new Books({
      title: req.body.title,
      author: req.body.author,
      publisher: req.body.publisher,
      image: req.body.image,
      stock:  req.body.stock,
      availableBooks: req.body.availableBooks,
      ratings: req.body.ratings,
    });
    const book = await books.save();
    res.send(book);
  } catch (error) {
    res.json({ message: error });
  }
};
// Get All books
const book_all = async (req, res) => {
  let filter = {};
  if (req.params.key) {
    filter.$or = [
      { title: { $regex: req.params.key } },
      { author: { $regex: req.params.key } },
      { publisher: { $regex: req.params.key } },
    ];
  }
  try {
    const books = await Books.find(filter);
    res.json(books);
  } catch (error) {
    res.json({ message: error });
  }
};
// Single book
const book_details = async (req, res) => {
  try {
    const books = await Books.findById(req.params.bookId);
    res.json(books);
  } catch (error) {
    res.json({ message: error });
  }
};
// Update book
const book_update = async (req, res) => {
  try {
    const books = await Books.findByIdAndUpdate(req.params.bookId, {
      title: req.body.title,
      author: req.body.author,
      publisher: req.body.publisher,
      image: req.body.image,
      stock: req.body.stock,
      availableBooks: req.body.availableBooks,
      ratings: req.body.ratings,
    });
    res.json(books);
  } catch (error) {
    res.json({ message: error });
  }
};
// Delete book
const book_delete = async (req, res) => {
  console.log(req.params);
  try {
    const books = await Books.findByIdAndDelete(req.params.bookId);
    console.log(books);
    res.json(books);
  } catch (error) {
    res.json({ message: error });
  }
};
// Search book
const book_search = async (req, res) => {
  try {
    const reg = new RegExp("\\b(" + req.params.key + ")\\b", "gi");

    const books = await Books.find({
      $or: [
        { title: { $regex: reg } },
        { author: { $regex: reg } },
        { publisher: { $regex: reg } },
        // { availablebooks: { $regex: req.params.key } },
        // { rating: { $regex: req.params.key } },
      ],
    });
    res.json(books);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  book_all,
  book_create,
  book_delete,
  book_details,
  book_update,
  book_search,
};
