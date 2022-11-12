const express = require("express");
const { main } = require("./models/index");
const Users = require("./models/Users");
const app = express();
main();

app.use(express.json());

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

app.post("/api/signup", async (req, res) => {
  console.log(req.body);
  try {
    const kitty = new Users({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      image: req.body.image,
      userType: req.body.userType,
      dob: req.body.dob,
    });
    const x = await kitty.save();
    res.send("OK");
  } catch (error) {
    console.log("ERROR ++++>>>>", error);
    res.send("error", error);
  }
});
app.post("/api/signin", async (req, res) => {
  console.log(req.body);
  try {
    const user = await Users.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    console.log("USER:", user);
    if (user) {
      res.send(user);
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } catch (error) {
    console.log("ERROR ++++>>>>", error);
    res.send("error", error);
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
