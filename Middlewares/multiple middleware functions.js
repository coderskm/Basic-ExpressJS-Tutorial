const express = require("express");
const app = express();
const logger = require("./logger");
const authUser = require('./auth_user');

app.use([logger, authUser]); // adding multiple middlewares; order of reference of functions matter

app.get("/", (req, res) => {
  res.send(`Home`);
});

app.get("/about", (req, res) => {
  res.send(`About`);
});

app.get("/api/products", (req, res) => {
  res.send(`Products`);
});

app.get("/api/items", (req, res) => {
  res.send(`Items`);
});

app.listen(5000, () => {
  console.log(`server running on PORT 5000...`);
});

