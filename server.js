// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/public/index.html');
});
//IMPORTANT:  the code below "routes" the request to a different page file
app.get("/services.html", function (request, response) {
  response.sendFile(__dirname + '/public/services.html');
});
// this is my attempt to create a route to the third page 
app.get("/photos.html", function (request, response) {
  response.sendFile(__dirname + '/public/photos.html');
});
// Route to page four
app.get("/contact.html", function (request, response) {
  response.sendFile(__dirname + '/public/contact.html');
});

app.get("/security.html", function (request, response) {
  response.sendFile(__dirname + '/public/security.html');});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

