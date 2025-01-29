const express = require('express');
const app = express();
const port = 5000;
const userModel = require('./usermodel');

app.get('/', (req, res) => {
    res.send("hey");

});

// create a new user
app.get('/create', async (req, res) => {
    createdUser = await userModel.create({
        name: 'john',
        email: 'wick@gmail.com',
        username: 'wickJ',
    });

    res.send(createdUser);
});

// update user data
app.get('/update', async (req, res) => {
    updatedUser = await userModel.findOneAndUpdate(
        { name: 'jamal' }, { name: 'khubaib' }, { new: true }
    );
    res.send(updatedUser);
});

// read all data
app.get('/users', async (req, res) => {
    userData = await userModel.find();
    res.send(userData);
});

// read single data
app.get('/user', async (req, res) => {
    userData = await userModel.find({
        name: 'Khubaib',
    });
    res.send(userData);
});

// delete user
app.get('/delete', async (req, res) => {
    userData = await userModel.deleteOne({
        name: 'john',
    });
    res.send(userData);
});

// delete all user
app.get('/deleteall', async (req, res) => {
    userData = await userModel.deleteMany();
    res.send(userData);
});

app.listen(port, function () {
    console.log(`http://localhost:${port}`);
});