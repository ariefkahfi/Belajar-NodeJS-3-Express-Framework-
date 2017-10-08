var express = require('express');

var app = express();



app.get('/room',function(req,res,next){
    var query = req.query.key;
    if(query === 'kanan'){
      next();
    }else{
        res.end('You are not allowed to access this page');
    }
},function (req,res){
      res.end('Hello world 2 with query : ' + req.query.key);
});


app.get('/room/r1',function (req,res,next){
   console.log('Processing');
   next();
},function(req,res,next){
   console.log('this is second function');next();
},function (req,res){
   res.end('This is end Response');
});

app.listen(3000);