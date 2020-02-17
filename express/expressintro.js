const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/contact',function(req,res){
  res.send("Contact get page!");
});

app.post('/contact',function(req,res){

})

app.get('/about',function(req,res){
  res.sendfile('about.html')
})
 
app.listen(3000)

