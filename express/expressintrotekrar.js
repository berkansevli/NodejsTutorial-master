const express = require('express')
const app = express()

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/',function(req,res){
    res.send("Hello express");
});

app.get('/getdata',function(req,res){
    member = new Object();
    member.name = "Çağatay";
    member.surname = "Yıldız";

    res.json(member);
});

app.get('/about',function(req,res){
     res.sendFile("about.html",{root:__dirname});
    //  res.sendfile("about.html");
});


app.get('/contact',function(req,res){
   

    res.status(404).send("Sayfa bulunamadı!");
    // res.status.send("Success!");
});


app.get('/galeri',function(req,res){
    var ad = req.query.ayiadi;
    res.sendfile(ad + '.jpg')
});



app.post('/login',function(req,res){
   var email =  req.query.email;
   var pwd = req.query.password;

   console.log(req.query);
//    console.log(pwd);

   res.send("OK!");

})



app.post('/signup',function(req,res){

    console.log(req.body);

    var username = req.body.name;
    var pwd = req.body.password;

    // console.log(req.body);
    // console.log(username);
    // console.log(pwd)
    res.send('OK!');
 
 })









app.listen(3000)