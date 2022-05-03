const express = require("express");
const cors = require("cors");
const ProductController = require("./controllers/ProductsController");
const { register, login } = require("./controllers/AuthController");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", register);
app.post("/login", login);

app.get("", (req, res) => {
  try {
    return res.send("Welcome to Bobbi- Brown API");
  } catch (err) {
    console.log(err);
  }
});

app.use("/product", ProductController);

module.exports = app;
