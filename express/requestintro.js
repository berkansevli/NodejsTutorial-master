var request = require('request');


request.get("https://northwind.now.sh/api/categories",function(err,res,body){
    // console.log(err);
    //console.log(res);
    if(!err){
        console.log(JSON.parse(body)[1].name);
    }

});



