var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

p.use(express.static(__dirname + "/css"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require(path.join(__dirname, '/app/routing/apiroutes.js'))(app);
require(path.join(__dirname, '/app/routing/htmlRoutes.js'))(app);


app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
