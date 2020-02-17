const express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', function (req, res) {
    res.sendfile("index.html");
});

app.get('/anasayfa', function (req, res) {
    res.sendfile("index.html");
});

app.get('/iletisim', function (req, res) {
    res.sendfile('iletisim.html')
});

app.post('/iletisim',function(req,res){
    console.log(req.body.name);
    console.log(req.body.surname);
    console.log(req.body.message);
    if(req.body.name == "" || req.body.surname == "" || req.body.message == ""){
        res.status(422).send("eksik parametre");
    }
    else{
        res.status(200).send("İşlem başarılı");
    }

});

app.get('/bozayi',function(req,res){
    res.sendfile('bozayi.jpg')
})

app.get('/api/kategoriler',function(req,res){
    res.sendfile('kategoriler.json')
});

app.listen(3001);

//https://startbootstrap.com/themes/clean-blog/




