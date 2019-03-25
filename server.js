var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

// process.env per instructor's suggestion when deploying to Heroku
var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "app/css"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT);
});