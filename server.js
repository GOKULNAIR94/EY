
const express = require('express');
const bodyParser = require('body-parser');
const restService = express();
var https = require('https');
var fs = require('fs'),
    path = require('path');
restService.use(bodyParser.urlencoded({
    extended: true
}));
restService.use(bodyParser.json());

restService.get('/', onRequest);
restService.use(express.static(path.join(__dirname, '/public')));

function onRequest(request, response){
    someUserID = request.query.id;
    console.log(' Awe: someUserID : ' + someUserID);
  response.sendFile(path.join(__dirname, '/public/index.html'));
}

restService.listen((process.env.PORT || 9000), function() {
  console.log("Server up and listening");
});