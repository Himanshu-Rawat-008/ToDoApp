const express = require('express');
const port = 8000;
// database connecting 

const db = require('./config/mongoose');
const app = express();

// since data received from user is encode we need a parse
// middleware
app.use(express.urlencoded());

// it find out folder assests in directory
// it contains css images fonts folder
app.use(express.static('assests'));


// any req comes goes to routes/index.js
app.use('/', require('./routes'));

// setting up view engine
app.set('view engine', 'ejs');
app.set('views','./views');

app.listen(port, function(err){
    if(err){
        console.log(`Error : ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
});