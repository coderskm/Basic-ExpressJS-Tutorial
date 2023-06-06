const express = require("express");
const app = express();
let { people } = require("./data");

app.use(express.static('./methods-public'));

app.use(express.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
    const { name } = req.body;
    if (name) {
       return res.status(200).send(`Welcome ${name}`)
    }
    return res.status(401).send("Please Provide Credentials");
});

app.listen(5000, () => {
  console.log(`server running on PORT 5000...`);
});

/* 
1> we parse form data by following middleware :-
app.use(express.urlencoded({ extended: false }));
2> once form is submitted the middleware adds the submitted form data to req.body object automatically.
3> we can see submitted data once we hit the POST API.
*/