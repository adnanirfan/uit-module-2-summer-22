const mongoose = require("mongoose");

const RentSchema = new mongoose.Schema({
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
  payment: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "payments",
    required: true,
  },
  startDate: Date,
  endDate: Date,
});

const Rent = mongoose.model("rent", RentSchema);

module.exports = Rent;
