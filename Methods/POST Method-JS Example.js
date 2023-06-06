const express = require("express");
const app = express();
let { people } = require("./data");

app.use(express.static("./methods-public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // used to parse JSON data

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({sucess:false, msg:'Please enter name'})
    }
    res.status(201).json({ success: true, person: name });
    
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  return res.status(401).send("Please Provide Credentials");
});

app.listen(5000, () => {
  console.log(`server running on PORT 5000...`);
});
