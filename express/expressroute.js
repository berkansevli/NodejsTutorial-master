const express = require('express');
var app = express();


app.get('/kategoriler/:id',(req,res) => {
    console.log(req.params.id);
})


app.listen(3005);