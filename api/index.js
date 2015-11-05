var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World!');   
});  
      
app.get('/user', function(req, res){   
  res.send(200, { name: 'tobi' });    
});
    
app.get('/ping', function(req, res){   
  res.send(200, { msg: 'ok' });    
});
    
var server = app.listen(3000, function () {     
  var host = server.address().address;
  var port = server.address().port;   
    
  console.log('Example app listening at http://%s:%s', host, port);
});

