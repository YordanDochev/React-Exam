const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/estates")
  .then(() => console.log("Database connected succesfully"))
  .catch((err) => console.log(`DB Error: ${err}`));
  
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3030, () => "Server is listening on port 3030");
