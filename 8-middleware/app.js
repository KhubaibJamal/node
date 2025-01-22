const express = require('express');
const app = express();
const port = 5000;

const reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send("provide age");
    } if (req.query.age < 18) {
        res.send("under age");
    } else {
        next();
    }
}

app.use(reqFilter);

app.get('/', (req, res) => {
    res.send("Welcome");
});
app.get('/user', (req, res) => {
    res.send("welcome user");
});

app.listen(port, function (err) {
    if (err) console.log("Error in server setup")
    console.log(`http://localhost:${port}`);
})