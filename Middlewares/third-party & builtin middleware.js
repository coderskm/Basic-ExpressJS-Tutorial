const express = require("express");
const app = express();
const morgan = require('morgan');

// using third party middlewares :-
app.use(morgan("tiny"));
// using builtin express middlewares :-
app.use(express.static("../public"));

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


