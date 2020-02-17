const express = require('express');
var app = express();

app.get("/dashboard",function(req,res){
    var kisi = new Object();
    res.send("Hello!");
    res.status(404).send("Sayfa bulunamadı");
    res.sendfile('index.html');
    res.json(kisi);
});

app.post('/contact', (req,res) => {
    req.body.ad;
    req.query.soyad;

    res.sendfile('test.html')
})


app.listen(3000);

