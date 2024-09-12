const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send("Welcome to the home page! " + req.query.name);
});


app.get('/about', (req, res) => {
    res.send("Welcome to the about page! " + req.query.age);
});


app.get('/contact-us', (req, res) => {
    res.send("Welcome to the contact-us page! " + req.query.email);
});



app.listen(port);

// http://localhost:5000/?name=khubaib
// http://localhost:5000/about/?age=44
// http://localhost:5000/contact-us/?email=gmail