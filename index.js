const express = require('express');
const port = 8000;

const app = express();


express.listen(port, function(err){
    if(err){
        console.log(`Error : ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
});