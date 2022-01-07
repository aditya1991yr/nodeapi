var express = require('express');  
var app=express();  
  
app.get('/api', function (req, res) {  
res.send('Node API Service!!!!');  
})  
  
var server = app.listen(8000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
})  