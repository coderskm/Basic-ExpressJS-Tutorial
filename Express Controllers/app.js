const express = require("express");
const app = express();

const people = require('./people routes');// importing router

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/people', people);// router invoked in main server file


app.listen(5000, () => {
  console.log(`server running on PORT 5000...`);
});

