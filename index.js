const express = require('express');
// extracting Schema
const List = require('./models/list.js');
const port = 8000;
// database connecting 

const db = require('./config/mongoose');
const app = express();

// setting up view engine
app.set('view engine', 'ejs');
app.set('views','./views');

// since data received from user is encode we need a parse
// middleware
app.use(express.urlencoded());

// it find out folder assests in directory
// it contains css images fonts folder
app.use(express.static('assests'));

// show data
app.get('/',function (req,res){
    List.find({},function(err,list){
        if(err){
            console.log(err);
            return;
        }
        return res.render('home',{
            lists : list
        });
    })
});

// add-data
app.post('/create-list',function(req,res){
    
    console.log("hello");
    
    // pushing into db
    List.create({
        description : req.body.description,
        category : req.body.category,
        duedate : req.body.duedate
    },function(err,newList){
        if(err){
            console.log(err);
            return;
        }
        console.log(newList);
        return res.redirect('back');
    });
})

// delete contact
app.get('/delete-list', function(req,res){
    
})

app.listen(port, function(err){
    if(err){
        console.log(`Error : ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
});