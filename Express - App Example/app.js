const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('../public'));

app.all("*", (req, res) => {
    res.status(404).send(`resource not found`);
});

app.listen(5000, () => {
    console.log(`server is listening on PORT 5000 ...`);
})

/*
1> another method to send static files through response :-
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
});
*/