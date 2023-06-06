const express = require("express");
const app = express();
const logger = require('./logger');

app.use('/api',logger);

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

/*
1> app.use() used to invoke middleware function on each API written.
2> types of app.use() :-
--> app.use(middlewareFunctionName) :- this middleware will be applied to every API.
--> app.use('./path',middlewareFunctionName) :- this middleware will be applied to every API having same path
as defined inside app.use() ie if API's path starts with same path as defined inside app.use(). 
*/