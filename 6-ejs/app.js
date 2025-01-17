const express = require('express');
const app = express();
const path = require('path');

// parse incoming requests with JSON or URL-encoded payloads, respectively. They make it easier to handle data sent to your server in the request body.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// __dirname give you hole path till you are working directory
// use static pages 
app.use(express.static(path.join(__dirname, 'public')));
// setup ejs
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index');
})

// dynamic route
// :username will be dynamic if any thing comes after profile it will show on website
app.get('/profile/:username', (req, res) => {
    res.send(`welcome, ${req.params.username}`);
})

// port listening
app.listen('5000', () => {
    console.log("http://localhost:5000");
})