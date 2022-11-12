const express = require("express");
const { main } = require("./models/index");
const Users = require("./models/Users");
const app = express();
main();
app.get("/", async (req, res) => {
  try {
    console.log("GET API");
    const kitty = new Users({
      username: "adnan",
      email: "adnan@gmail.com",
      password: "qwerty",
    });
    const x = await kitty.save();

    console.log(x.username, x.email, x.password);
    res.send(x);
  } catch (error) {
    console.log("ERROR", error);
    res.send(error);
  }
});

app.listen(4000, () => {
  console.log("Server listening at PORT: 4000");
});



    // const x = await Users.create({
    //   username: "adnan",
    //   email: "adnan@gmail.com",
    //   password: "qwerty",
    // });