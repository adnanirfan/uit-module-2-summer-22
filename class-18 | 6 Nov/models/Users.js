const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const Users = mongoose.model("users", UsersSchema);

module.exports = Users;
