//Import necessary modules
const express = require('express');
const path = require('path');

//initialize express
const app = express();

//set static folder
app.use(express.json());

//
app.use(express.urlencoded({ extended: false}));

//Define a route
app.post( '/contact', (req, res) => {
    if (!req.body.name) {
        return res.status(400).send('Name is required')
    }

    //DATABASE STUFF
    res.status(201).send(`Thank You ${req.body.name}`)
});

app.post('login', (req, res) => {
    if(!req.header('x-auth-token')) {
        return res.status(400).send('No Token');
    } 

    if(req.header('x-auth-token') !== '123456') {
        return res.status(401).send('Not authorized')

    }

    res.send('Logged in');
})

//Define Port
const PORT = 5000;

app.listen(5000, ()  => {
    console.log(`Server started on Port: ${PORT} `)
})
