const express = require('express');
const port = 8000;
// extracting Schema
const List = require('./models/list.js');
// database connecting 

const db = require('./config/mongoose')
const app = express();

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