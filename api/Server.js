const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require("dotenv").config();
const cors = require("cors");
const { parse } = require("dotenv");

const routers = require('./routes/Router')

const app = express();
// app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/samosa_shop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected successfully"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());

app.use('/',routers);


app.listen(5000, () => {
  console.log("App listen on port 5000!");
});
