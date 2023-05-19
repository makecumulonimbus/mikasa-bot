const express = require("express");
const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Start server at port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("ABOUT PAGE");
});


module.exports.app