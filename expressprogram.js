var express = require('express');
var app=express();

app.set('view engine','jade');

app.get('/',function(req,res){
    res.render('index',{title:'Guru99',message:'Welcome to My Page'});
});

app.get('/book',function(req,res){
    res.send('My book');
});

app.get('/book/book2',function(req,res){
    res.send('My book 2');
});

var server=app.listen(3000,function(){});