const express = require('express');
const app = express();
const port = 5000;


app.get('/', (req, res) => {
    res.send("hey");

});


app.listen(port, function() {
    console.log(`http://localhost:${port}`);
});