const express = require('express');
const path = require('path');
const fs = require('node:fs');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    fs.readdir(`./files`, (err, files) => {
        res.render('index', { files: files });
    });
})

app.post('/create', (req, res) => {
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.description, (error) => {
        res.redirect('/');
    });
})


app.get('/file/:filename', (req, res) => {
    fs.readFile(`./files/${req.params.filename}`, (error, filedata) => {
        res.render('show', { filename: req.params.filename, filedata: filedata });
    });
})
app.get('/edit/:filename', (req, res) => {
    res.render('edit', { filename: req.params.filename });
})
app.post('/edit', (req, res) => {
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}.txt`, (error) => {
        res.redirect('/');
        if (error) {
            console.log("Error: " + error);
        }
    });
})

// port listening
app.listen('5000', () => {
    console.log("http://localhost:5000");
})