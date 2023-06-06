const express = require("express");
const app = express();

const logger = (req,res,next) => {
     const method = req.method;
     const url = req.url;
     const time = new Date().getFullYear();
      console.log(method, url, time);
      //res.send('testing') -> this will end request-response cycle here only
      next();
}

app.get('/', logger,(req, res) => {
    res.send(`Home`);
})

app.get("/about",logger,(req, res) => {
  res.send(`About`);
});

app.listen(5000, () => {
  console.log(`server running on PORT 5000...`);
});

/* 
1> to use multiple middlewares :-
Eg:- app.get('/api/about',[m/w_1, m/w_2,..],(req,res)=>{
  res.send(`multiple middleware in one API example`);
});
*/