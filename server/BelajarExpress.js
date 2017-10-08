var express = require('express');
var fs  =require('fs');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded(
    {extended : true}
));


app.post('/form',function (req,res){
   res.send('Hello World');
   res.end();
});

app.get('/',function (req,res){
    res.send('Hello World');
});


app.get('/one',function(req,res){
    fs.readFile('../pages/PageOne.html',function(e,d){
        res.write(d);
        res.end();
    });
});

app.get('/two',function(req,res){
   fs.readFile('../pages/PageTwo.html',function(e,d){
      res.write(d);
      res.end();
   });
});

app.get('/home',function(req,res){
    fs.readFile('../pages/Home.html',function(err,data){
       res.write(data);
       res.end();
    });
});


app.listen(3000);