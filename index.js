var express = require('express');  
var app=express();  
  
app.get('/api/get', function (req, res) {  
res.send('Node API Service!!!!');  
})  
  
var server = app.listen(8000, function () {  
  
})  
