#!/usr/bin/env node
var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);

app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', { layout: false });
});

app.ws('/', function(ws, req) {
  ws.on('message', function(msg){ 
    console.log(`received message ${msg}`);
    expressWs.getWss('/').clients.forEach(function(client){
      client.send(msg);
    })
  });
});

app.listen(8080);