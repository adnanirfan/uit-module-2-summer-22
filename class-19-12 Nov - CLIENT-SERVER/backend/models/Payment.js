const mongoose = require("mongoose");

const PaymentsSchema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "users",
    required: true,
  },
  paymentMethod: String,
  amount: Number,
});

const Payments = mongoose.model("payments", PaymentsSchema);

module.exports = Payments;
