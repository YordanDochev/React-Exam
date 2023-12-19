const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");
const cors = require('cors')

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/estates")
  .then(() => console.log("Database connected succesfully"))
  .catch((err) => console.log(`DB Error: ${err}`));

app.use(express.urlencoded({extended:false}))

app.use(express.json())

app.use(cors())

app.use(router)

app.listen(3030, () => "Server is listening on port 3030");
