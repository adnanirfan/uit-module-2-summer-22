const express = require("express");
const app = express();
const port = 3005;
const formsSubmitted = [];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/form", (req, res) => {
  res.send(formsSubmitted);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
