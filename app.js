var express = require('express');
var pug = require('pug');
var app = express();

app.use(express.static('.'));

app.get('/', function(request, response){
  response.send(pug.renderFile('./src/views/index.pug'));
});

app.listen(4200);
