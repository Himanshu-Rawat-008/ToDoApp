const mongoose = require ('mongoose');
const { db } = require('../models/list');

// todolist database name
mongoose.connect('mongodb://localhost/todolist',{useUnifiedTopology: true, useNewUrlParser:true});

// acuire connection
cosnt db = mongoose.connection;

// error 
db.on('error',console.error.bind(console,'error connecting to db'));

// successful connection
db.once('open', function(){
    console.log('Success');
});
