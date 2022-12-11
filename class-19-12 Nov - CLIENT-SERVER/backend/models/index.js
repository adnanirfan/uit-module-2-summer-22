const mongoose = require("mongoose");

const uri =
  "mongodb+srv://dbuser:dbpassword@cluster0.ar7siqu.mongodb.net/m2_nov_22?retryWrites=true&w=majority";
  // "mongodb+srv://dbuser:<password>@cluster0.ar7siqu.mongodb.net/?retryWrites=true&w=majority";

async function main() {
  try {
    const x = await mongoose.connect(uri);
    console.log("CONNECTED !!");
  } catch (error) {
    console.log("ERROR: ", error);
  }
}
module.exports = { main };
