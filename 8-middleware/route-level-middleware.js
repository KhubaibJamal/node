const express = require('express');
const reqFilter = require('./middleware');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send("Welcome");
});

app.get('/user', reqFilter, (req, res) => {
    res.send("welcome user");
});

app.listen(port, function (err) {
    if (err) console.log(`Error in server setup: ${err}`);
    console.log(`http://localhost:${port}`);
})