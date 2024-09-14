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
app.get( '/', (req, res) => {
    res.send('Hello From Express1');
});


//Define Port
const PORT = 5000;

app.listen(5000, ()  => {
    console.log(`Server started on `)
})
