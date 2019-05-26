var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();

const http = require('http');
const port = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end('<h1>Hello World</h1>');
});
server.listen(port, () => {
	console.log(`Server running at port ` + port);
});

// // Sets an initial port. We"ll use this later in our listener
// var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// p.use(express.static(__dirname + "/css"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require(path.join(__dirname, '/app/routing/apiroutes.js'))(app);
require(path.join(__dirname, '/app/routing/htmlRoutes.js'))(app);


// app.listen(port, function() {
// 	console.log("App listening on PORT: " + port);
// });
