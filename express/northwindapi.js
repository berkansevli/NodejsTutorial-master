var apirequest = require('request');
const express = require('express');

var app = express();


app.get('/kategoriler', function (req, res) {

    apirequest.get('https://northwind.now.sh/api/categories', function (err, r, body) {
        if (!err) {
            res.json(JSON.parse(body));
        }
    })
});
//4LJvJqSnapF1989C
//dbadmin

app.get('/urunler', function (req, res) {
    apirequest.get('https://northwind.now.sh/api/products', function (err, r, body) {
        if (!err) {
            res.json(JSON.parse(body));
        }
    })
});

app.get('/tedarikciler', function (req, res) {

    apirequest.get('https://northwind.now.sh/api/suppliers', function (err, r, body) {
        if (!err) {
            res.json(JSON.parse(body));
        }
    });

});

app.get('/tedarikciler/:id', (req, res) => {
    var id = req.params.id;

    apirequest.get('https://northwind.now.sh/api/suppliers/' + id, function(err,r,body){
        res.json(JSON.parse(body));
    })
})

app.listen(3001);


