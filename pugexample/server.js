const pug = require('pug');
const express = require('express');

var app = express();
app.set('view engine', 'pug')


app.get('/',(req,res) => {
    res.render('index', { name: 'Çağatay' })
})

app.listen(3000);
