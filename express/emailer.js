var nodemailer = require('nodemailer');
const express = require('express')
const app = express()
var bodyParser = require('body-parser');
var _ = require('is_js');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post('/signup',function(req,res){

  if(_.not.empty(req.body.email) && _.not.empty(req.body.username) && _.not.empty(req.body.password) && _.email(req.body.email)){

    var email = req.body.email;
    var code = "568253";

    SendActivicationCode(email,code);

    res.status(200).send("EMail başarılı");
  }
  else{
    res.status(422).send("eksik parametre");

  }
  

});

app.post('/login',function(){

})




var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bilgebatman19@gmail.com',
      pass: 'Superman!35'
    }
  });
  

  
  //cajecol702@reptech.org
  function SendActivicationCode(toemail,code){

    var mailOptions = {
        from: 'bilgebatman19@gmail.com',
        to: toemail,
        subject: 'Aktivasyon Mail',
        text: 'Aktivasyon kodunuz: ' + code
      };


    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  }

  app.listen(1925);
